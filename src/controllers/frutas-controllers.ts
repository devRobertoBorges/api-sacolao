import { Request, Response } from "express";

import * as services from "../services/frutas-services";


export const getFrutas = async (req: Request, res: Response) => {
    const httpRespose = await services.getFrutasServices();
    

    return res.status(200).json(httpRespose);
};