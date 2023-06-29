import { Request, Response } from 'express';
import SaleModel from '../models/sale';

export const getAll = async (req: any, res: Response) => {
    try {

        const sales = await SaleModel.find({ user: req.user.sub })
        res.status(200).json({ ok: true, message: 'enviando la lista de ventas', data: sales });

    } catch (error) {
        res.status(500).json({ ok: false, message: 'Error del servidor' })
        
    }
}

export const create = async (req: any, res: Response) => {
    try {

        const { operation_date, total_amount } = req.body;
        
        const createdSale = await SaleModel.create({ operation_date, user: req.user.sub, total_amount })
        
        res.status(201).json({ ok: true, message: 'venta creada con exito', data: createdSale });

    } catch (error) {
        res.status(500).json({ ok: false, message: 'Error del servidor' })
        
    }
}
