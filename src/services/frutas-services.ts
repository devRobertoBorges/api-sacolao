import * as FrutasRepository from "../repositories/frutas-repository";
import * as HttpResponse from "../utils/httpHelper";

export const  getFrutasServices = async () => {

    const data = await FrutasRepository.listarFrutas();

    let response = null;

    if(data){
        response = await HttpResponse.ok(data);
    }else {
        response = await HttpResponse.notFound();
    }
    return data;
};

export const getFrutasServicesById = async (id:number) => {
    const data =  await FrutasRepository.listarFrutasById(id);

    let response = null;

    if (data){
        response = HttpResponse.ok(data);
    }else{
        response = HttpResponse.notFound();
    };

    return data;
};