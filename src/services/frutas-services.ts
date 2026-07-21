import { listarFrutas } from "../repositories/frutas-repository";


export const getFrutasServices = () => {
    const frutas = listarFrutas();

    return frutas;
};