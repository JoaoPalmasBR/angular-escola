export class Disciplina {
    nome: string;
    descricao: string;
    codigo: number;
    data: Date;
    estaativo: boolean;
    tipo: string;
    periodo: number;
    constructor(codigo: number, nome: string, descricao: string, data: Date, estaativo: boolean, tipo: string,  periodo: number) {
        this.codigo = codigo;
        this.nome = nome;
        this.data = data;
        this.estaativo = estaativo;
        this.tipo = tipo;
        this.periodo = periodo;
        this.descricao = descricao;
    }

}
