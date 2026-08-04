import { Request, Response } from "express";
import { frutas } from "../models/frutas-model";
import * as services from "../services/frutas-services";


export const getFrutas = async (req: Request, res: Response) => {
    const httpResponse = await services.getFrutasServices();
    

    return res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const getFrutasById = async(req: Request, res: Response) => {
    const id = Number(req.params.id);
    
    const httpResponse = await services.getFrutasByIdServices(id);

    return res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const postFruta = async(req: Request, res: Response) => {
    const fruta: frutas = req.body;

    const httpResponse = await services.createFrutasServices(fruta);

    if (httpResponse){
        return res.status(httpResponse.statusCode).json(httpResponse.body);
    }
};

export const deleteFruta = async(req: Request, res: Response) => {
    const id = Number(req.params.id);

    const httpResponse = await services.deleteFrutasService(id);

    res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const updatedFruta = async(req:Request, res: Response) => {
    const id = Number(req.params.id);

    const fruta: frutas = req.body;

    const httpResponse = await services.updateFrutaService(id, fruta);

    res.status(httpResponse.statusCode).json(httpResponse.body);
};