import { Request, Response } from 'express';
import sendEmail from '../helpers/mailer';
import UserModel from '../models/user';
import jwt from 'jsonwebtoken';

export const login = async (req: Request, res: Response) => {
    console.log(req.body);
    const { email } = req.params;
    const { code } = req.body;
    const user = await UserModel.findOne({ email, login_code: code });

    if (!user) {
        return res.status(400).json({ ok: false, message: 'Codigo incorrecto' });
    }

    const token = jwt.sign({
        sub: user._id,
        firstname: user.firstname,
        lastname: user.lastname,
        roles: user.roles
    }, process.env.JSON_WEB_TOKEN as string)
    res.cookie("jwt", token)
    
    res.status(200).json({ ok: true, message: 'inicio de sesion exitoso' });
}

export const generateCode = async (req: Request, res: Response) => {
    const { email } = req.params;

    const user = await UserModel.findOne({ email });
    console.log({ email });
    
    if (!user) {
        return res.status(400).json({ ok: false, message: 'Usuario no encontrado' });
    }
    let randomCode = '';
    for (let i = 0; i <= 5; i++) {
        const number = Math.floor(Math.random()*10);
        randomCode += number;
    }

    user.login_code = randomCode;
    await user.save();
    sendEmail({ 
        to: email, 
        subject: `Este es tu codigo para acceder a la aplicacion: ${randomCode}`, 
        html: `este es tu codigo: ${randomCode}`
    });
    res.send('generate code')
}
