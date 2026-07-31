import { RowDataPacket } from "mysql2"

export interface frutas {
    id: number,
    nome: string,
    preco: number,
    quantidade: number
};

export interface frutasSql extends RowDataPacket{
    id: number,
    nome: string,
    preco: number,
    quantidade: number
};