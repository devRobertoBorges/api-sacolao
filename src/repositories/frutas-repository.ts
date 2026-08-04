import { frutas, frutasSql } from "../models/frutas-model";

import { ResultSetHeader } from "mysql2";

import { connection } from "../database/connection";


export const listarFrutasSql = async () => {
    const [rows] = await connection.query<frutasSql[]>(
        "SELECT * FROM frutas"
    );

    return rows;
};

export const listarFrutasById = async(id:number): Promise<frutas | undefined> => {
    const [rows] = await connection.query<frutasSql[]>(
        "SELECT * FROM frutas WHERE id = ?",
        [id]
    );
    
    return rows[0];
};

export const inserirFruta = async(fruta: frutas) => {
    const [result] = await connection.query<ResultSetHeader>(
        "INSERT INTO frutas (nome, preco, quantidade) VALUES (?,?,?)",
        [fruta.nome, fruta.preco, fruta.quantidade]
    );

    return result.insertId;
};

export const deleteFruta = async(id:number) => {
    const [result] = await connection.query<ResultSetHeader>(
        "DELETE FROM frutas WHERE id = ?",
        [id]
    );

    return result.affectedRows > 0;
};

export const updateFruta = async(id:number, fruta:frutas) => {
    const [result] = await connection.query<ResultSetHeader>(
        "UPDATE frutas SET nome = ?, preco = ?, quantidade = ? WHERE ID = ?",

        [fruta.nome, fruta.preco, fruta.quantidade, id]
    );

    return result.affectedRows > 0;
};