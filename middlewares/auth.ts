import { NextFunction, Request, Response } from 'express';
import jwt, { JsonWebTokenError, TokenExpiredError } from 'jsonwebtoken';

export const validateUser = () => {
    return (req: any, res: Response, next: NextFunction) => {

        try {
            
            const token = req.cookies.jwt;
            const user = jwt.verify(token, process.env.JSON_WEB_TOKEN as string)
            req.user = user
            next()
        } catch (error) {
            if (
                error instanceof JsonWebTokenError ||
                error instanceof TokenExpiredError
            ) {
                res.status(401).json({ ok: false, message: error.message })
                
            }
            res.status(500).json({ ok: false, message: 'Error del servidor' })
            
        }
    }
}
