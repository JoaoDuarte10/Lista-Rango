import { pool } from "../database/connection";

interface IProduto {
    name: String;
    preco: Float32Array;
    categoria: String;
}

class UpdateProdutoService {
    async execute({name, preco, categoria}: IProduto) {

    }
}

export { UpdateProdutoService }