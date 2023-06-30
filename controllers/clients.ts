import { Request, Response } from 'express';
import ClientModel from '../models/client';

export const getAll = async (req: any, res: Response) => {
    try {

        const clients = await ClientModel.find()
        res.status(200).json({ ok: true, message: 'enviando la lista de ventas', data: clients });

    } catch (error) {
        res.status(500).json({ ok: false, message: 'Error del servidor' })
        
    }
}

export const create = async (req: any, res: Response) => {
    try {

        const { operation_date, total_amount } = req.body;
        
        const createdSale = await ClientModel.create({ operation_date, user: req.user.sub, total_amount })
        
        res.status(201).json({ ok: true, message: 'cliente creado con exito', data: createdSale });

    } catch (error) {
        res.status(500).json({ ok: false, message: 'Error del servidor' })
        
    }
}
