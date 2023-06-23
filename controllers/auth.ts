import { Request, Response } from 'express';
import sendEmail from '../helpers/mailer';
import UserModel from '../models/user';

export const login = (req: Request, res: Response) => {
    res.send('Login');
}

export const generateCode = async (req: Request, res: Response) => {
    const { email } = req.params;

    const user = await UserModel.findOne({ email });
    console.log({ email })
    sendEmail({ to: email , subject: 'Este es tu codigo', html: 'este es tu codigo' });
    res.send('generate code')
}
