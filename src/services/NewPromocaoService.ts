import { pool } from "../database/connection";

interface IPromocao {
    descricao: String;
    preco: Float32Array;
    dia_inicio_promocao: Date;
    dia_fim_promocao: Date;
}

class NewPromocaoService {
    async execute({descricao, preco, dia_inicio_promocao, dia_fim_promocao}: IPromocao) {

    }
}

export { NewPromocaoService }