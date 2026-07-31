import { Request, Response } from "express";

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
    const bodyValue = req.body;

    const httpResponse = await services.createFrutasServices(bodyValue);

    if (httpResponse){
        return res.status(httpResponse.statusCode).json(httpResponse.body);
    }
};

export const deleteFruta = async(req: Request, res: Response) => {
    const id = Number(req.params.id);

    const httpResponse = await services.deleteFrutasService(id);

    res.status(httpResponse.statusCode).json(httpResponse.body);
};