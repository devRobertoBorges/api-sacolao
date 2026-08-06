import { Request, Response } from "express";
import * as services from "../services/venda-services";

export const postVenda = async (req: Request, res: Response) => {
    const itens = req.body.itens;

    const httpResponse = await services.criarVendaService(itens);

    res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const listarVendas = async (req: Request, res: Response) => {
    const httpResponse = await services.listarVendasService();

    res.status(httpResponse.statusCode).json(httpResponse.body);
};