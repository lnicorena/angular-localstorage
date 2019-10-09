// Modelo de cliente
export class Pessoa {
    id: number;
    nome: string;
    cpf: string;
    telefone: string;
    dtnasc: Date;
    endereco: string;
    veiculoNome: string;
    veiculoMarca: string;
    veiculoModelo: string;

    constructor(options = {}) {
        for (var key in options) {
            if (options.hasOwnProperty(key)) {
                this[key] = options[key];
            }
        }
    }
}
