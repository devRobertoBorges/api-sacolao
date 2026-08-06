import * as VendasRepository from "../repositories/vendas-repository";
import * as HttpResponse from "../utils/httpHelper";
import { itemVenda } from "../models/venda-model";

export const criarVendaService = async (itens: itemVenda[]) => {
    try {
        if (!Array.isArray(itens) || itens.length === 0) {
            return await HttpResponse.badRequest("Informe ao menos um item na venda");
        }

        for (const item of itens) {
            if (!Number.isInteger(item.fruta_id) || item.fruta_id <= 0) {
                return await HttpResponse.badRequest("fruta_id inválido");
            }
            if (!Number.isInteger(item.quantidade) || item.quantidade <= 0) {
                return await HttpResponse.badRequest("quantidade inválida");
            }
        }

        const venda = await VendasRepository.criarVenda(itens);

        return await HttpResponse.created(venda);

    } catch (erro: any) {
        console.error(erro);

        if (erro.message?.includes("Estoque insuficiente") || erro.message?.includes("não encontrada")) {
            return await HttpResponse.badRequest(erro.message);
        }

        return await HttpResponse.serverError();
    }
};

export const listarVendasService = async () => {
    try {
        const data = await VendasRepository.listarVendas();
        return await HttpResponse.ok(data);
    } catch (erro) {
        console.error(erro);
        return await HttpResponse.serverError();
    }
};