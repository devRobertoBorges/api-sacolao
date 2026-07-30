import * as FrutasRepository from "../repositories/frutas-repository";
import * as HttpResponse from "../utils/httpHelper";
import { frutas } from "../models/frutas-model";

export const  getFrutasServices = async () => {
    try {
        const data = await FrutasRepository.listarFrutas();

        let response = null;

        if(data){
            response = await HttpResponse.ok(data);
        }else {
            response = await HttpResponse.notFound();
        }

        return data;

    } catch(erro) {
        console.error(erro);

        return await HttpResponse.serverError();
    }
};

export const getFrutasByIdServices = async (id:number) => {

    try {
        
        const data =  await FrutasRepository.listarFrutasById(id);

        let response = null;

        if (data){
            response = HttpResponse.ok(data);
        }else{
            response = HttpResponse.notFound();
        };

        return data;

    } catch(erro){
        console.error(erro);

        return await HttpResponse.serverError();
    };
};

export const createFrutasServices = async(fruta: frutas) => {

    try {
        
        let response = null;
        
        if (Object.keys(fruta).length !== 0){
            await FrutasRepository.inserirFruta(fruta);

            response = await HttpResponse.created();
        }else {
            response = await HttpResponse.notFound();
        };

        return response;

    } catch(erro){
        console.error(erro);

        return await HttpResponse.serverError();
    };
};

export const deleteFrutasService = async(id: number) => {

    try {
        const deleted = await FrutasRepository.deleteFruta(id);

        if(!deleted){
            return await HttpResponse.notFound();
        }else {
            return await HttpResponse.ok({message: "deleted"})
        };
    } catch(erro){
        console.error(erro);

        return await HttpResponse.serverError();
    };
};