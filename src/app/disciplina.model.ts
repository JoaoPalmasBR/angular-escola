export class Disciplina {
  nome: string;
  descricao: string;
  cod: number;

  constructor(cod:number, nome: string, descricao?: string) {
    this.cod = cod;
    this.nome = nome;
    this.descricao = descricao;
  }
}
