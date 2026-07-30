import { Request, Response } from "express";

import * as services from "../services/frutas-services";


export const getFrutas = async (req: Request, res: Response) => {
    const httpResponse = await services.getFrutasServices();
    

    return res.status(200).json(httpResponse);
};

export const getFrutasById = async(req: Request, res: Response) => {
    const id = Number(req.params.id);
    
    const httpResponse = await services.getFrutasByIdServices(id);

    return res.status(200).json(httpResponse);
};

export const postFruta = async(req: Request, res: Response) => {
    const bodyValue = req.body;

    const httpResponse = await services.createFrutasServices(bodyValue);

    if (httpResponse){
        return res.status(200).json(httpResponse);
    }
};

export const deleteFruta = async(req: Request, res: Response) => {
    const id = Number(req.params.id);

    const httpResponse = await services.deleteFrutasService(id);

    res.status(httpResponse.statusCode).json(httpResponse.body);
};