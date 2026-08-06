import { connection } from "../database/connection";
import { ResultSetHeader, RowDataPacket } from "mysql2";
import { itemVenda } from "../models/venda-model";

export const criarVenda = async (itens: itemVenda[]) => {
    const conn = await connection.getConnection();

    try {
        await conn.beginTransaction();

        let total = 0;
        const itensComPreco: (itemVenda & { preco: number })[] = [];

        for (const item of itens) {
            const [rows] = await conn.query<RowDataPacket[]>(
                "SELECT preco, quantidade FROM frutas WHERE id = ? FOR UPDATE",
                [item.fruta_id]
            );

            const fruta = rows[0];

            if (!fruta) {
                throw new Error(`Fruta id ${item.fruta_id} não encontrada`);
            }

            if (fruta.quantidade < item.quantidade) {
                throw new Error(`Estoque insuficiente para a fruta id ${item.fruta_id}`);
            }

            total += fruta.preco * item.quantidade;
            itensComPreco.push({ ...item, preco: fruta.preco });
        }

        const [resultVenda] = await conn.query<ResultSetHeader>(
            "INSERT INTO vendas (total) VALUES (?)",
            [total]
        );

        const vendaId = resultVenda.insertId;

        for (const item of itensComPreco) {
            await conn.query(
                "INSERT INTO itens_venda (venda_id, fruta_id, quantidade, preco_unitario) VALUES (?, ?, ?, ?)",
                [vendaId, item.fruta_id, item.quantidade, item.preco]
            );

            await conn.query(
                "UPDATE frutas SET quantidade = quantidade - ? WHERE id = ?",
                [item.quantidade, item.fruta_id]
            );
        }

        await conn.commit();

        return { id: vendaId, total };

    } catch (erro) {
        await conn.rollback();
        throw erro;
    } finally {
        conn.release();
    }
};

export const listarVendas = async () => {
    const [rows] = await connection.query<RowDataPacket[]>(
        "SELECT * FROM vendas ORDER BY data_venda DESC"
    );
    return rows;
};