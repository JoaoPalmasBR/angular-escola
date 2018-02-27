import {Professor} from './professor.model';
export class Disciplina {
  codigo;
  nome: string;
  professor: Professor;
  descricao: string;

  constructor(codigo, nome: string,professor: Professor, descricao?: string) {
    // ? opcional
    this.codigo=codigo;
    this.nome = nome;
    this.professor = professor;
    this.descricao = descricao;
  }
}