import * as FrutasRepository from "../repositories/frutas-repository";
import * as HttpResponse from "../utils/httpHelper";
import { frutas } from "../models/frutas-model";

export const  getFrutasServices = async () => {
    try {
        const dataFrutas = await FrutasRepository.listarFrutasSql();

        let response = null;

        if(dataFrutas){
            response = await HttpResponse.ok(dataFrutas);
        }else {
            response = {
                statusCode: 404,
                body: null,
                message: "not found"
            }
        };

        return response;

    } catch(erro) {
        console.error(erro);

        return await HttpResponse.serverError();
    }
};

export const getFrutasByIdServices = async (id:number) => {

    try {
        
        if (!Number.isInteger(id) || id <= 0) {
            return await HttpResponse.notFound();
        }
        const data =  await FrutasRepository.listarFrutasById(id);

        let response = null;

        if (data){
            response = HttpResponse.ok(data);
        }else{
            response = HttpResponse.notFound();
        };

        return response;

    } catch(erro){
        console.error(erro);

        return await HttpResponse.serverError();
    };
};

export const createFrutasServices = async (fruta: frutas) => {

    try {

        if (!fruta) {
            return await HttpResponse.badRequest("Informe os dados da fruta");
        }

        if (
            typeof fruta.nome !== "string" ||
            fruta.nome.trim() === "" ||
            !isNaN(Number(fruta.nome))
        ) {
            return await HttpResponse.badRequest("Informe um nome válido");
        }

        if (
            typeof fruta.preco !== "number" ||
            fruta.preco < 0
        ) {
            return await HttpResponse.badRequest("Preço inválido");
        }

        if (
            typeof fruta.quantidade !== "number" ||
            fruta.quantidade < 0
        ) {
            return await HttpResponse.badRequest("Quantidade inválida");
        }

        await FrutasRepository.inserirFruta(fruta);

        return await HttpResponse.created();

    } catch (erro) {
        console.error(erro);

        return await HttpResponse.serverError();
    }
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

export const updateFrutaService = async(id:number, fruta:frutas) => {

    try{

        if(typeof fruta.nome !== "string" || fruta.nome.trim() === ""){
            return await HttpResponse.badRequest('Informe um nome válido');
        };

        if (typeof fruta.preco !== "number" || fruta.preco < 0) {
            return await HttpResponse.badRequest("Preço inválido.");
        };

        if (typeof fruta.quantidade !== "number" || fruta.quantidade < 0) {
            return await HttpResponse.badRequest("Quantidade inválida.");
        };

        const updated = await FrutasRepository.updateFruta(id, fruta);

        if (!updated){
            return await HttpResponse.badRequest('Credenciais invalidas');
        }else{
            return await HttpResponse.ok({message: "updated"})
        };
    } catch(erro){
        console.error(erro);

        return await HttpResponse.serverError();
    };

};