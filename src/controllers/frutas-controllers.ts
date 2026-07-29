import { Request, Response } from "express";

import * as services from "../services/frutas-services";


export const getFrutas = async (req: Request, res: Response) => {
    const httpResponse = await services.getFrutasServices();
    

    return res.status(200).json(httpResponse);
};

export const getFrutasById = async(req: Request, res: Response) => {
    const id = Number(req.params.id);
    
    const httpResponse = await services.getFrutasServicesById(id);

    return res.status(200).json(httpResponse);
};

