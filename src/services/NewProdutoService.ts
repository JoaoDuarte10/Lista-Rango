import { pool } from "../database/connection";

interface IProduto {
    name: String;
    preco: Float32Array;
    categoria: String;
}

class NewProdutoService {
    async execute({name, preco, categoria}: IProduto) {

    }
}

export { NewProdutoService }