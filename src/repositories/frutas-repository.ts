import { frutas } from "../models/frutas-model";

let bancoFrutas: frutas[] = [
    {
        id: 1,
        nome: "Mamão",
        preco: 5.45,
        quantidade: 2
    },
    {
        id: 2,
        nome: "Maçã",
        preco: 6.99,
        quantidade: 10
    },
    {
        id: 3,
        nome: "Banana",
        preco: 3.99,
        quantidade: 25
    },
    {
        id: 4,
        nome: "Laranja",
        preco: 4.50,
        quantidade: 18
    },
    {
        id: 5,
        nome: "Uva",
        preco: 12.90,
        quantidade: 8
    },
    {
        id: 6,
        nome: "Abacaxi",
        preco: 7.80,
        quantidade: 5
    },
    {
        id: 7,
        nome: "Manga",
        preco: 8.25,
        quantidade: 12
    },
    {
        id: 8,
        nome: "Pera",
        preco: 9.50,
        quantidade: 7
    },
    {
        id: 9,
        nome: "Melancia",
        preco: 19.90,
        quantidade: 3
    },
    {
        id: 10,
        nome: "Morango",
        preco: 14.99,
        quantidade: 15
    }
];

export const listarFrutas = async() => {
    return bancoFrutas;
};