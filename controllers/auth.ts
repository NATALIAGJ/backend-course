import { Request, Response } from 'express';

export const login = (req: Request, res: Response) => {
    res.send('Login');
}

export const generateCode = (req: Request, res: Response) => {
    res.send('generate code')
}