import {Component} from '@angular/core';
import {Disciplina} from './disciplina.model';
import {DateFormatter} from '@angular/common/src/pipes/deprecated/intl';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  editando = null;
  nome = null;
  descricao = null;
  codigo = null;
  data = null;
  estaativo = null;
  tipo = null;
  periodo = null;
  excluir_ok = false;
  editar_ok = false;
  salvar_ok = false;
  texto = null;
  disciplinas = [];
  disciplina = null;
  keys = [];
  num = 0;
  cont = localStorage.length;
  limpar(){
    localStorage.clear();
    this.disciplinas.length=0;
  }
  baixa(){
    this.disciplinas.length = 0;
    while(this.num < this.cont){
      this.disciplina = JSON.parse(window.localStorage.getItem(localStorage.key(this.num)));
      console.log(this.disciplina)
      this.disciplinas.push(this.disciplina);
      this.num = this.num + 1;
    }
    this.num = 0;
  }
  /*
  disciplinas = [
    new Disciplina(
      0,
      'Língua Portuguesa',
      'texto sobre PORTUGUES',
       null,
      true,
      'principal',
      7
    ),
    new Disciplina(
      1,
      'Matematica',
      'texto sobre MATEMATICA',
      null,
      false,
      'secundaria',
      4
    )
  ];
  */

  salvar() {
    if (this.editando) {
      this.editando.nome = this.nome;
      this.editando.descricao = this.descricao;
      this.editando.codigo = this.codigo;
      this.editando.data = this.data;
      this.editando.estaativo = this.estaativo;
      this.editando.tipo = this.tipo;
      this.editando.periodo = this.periodo;
      this.editar_ok = true;
      this.texto = {
        codigo:  this.editando.codigo,
        nome: this.editando.nome,
        descricao: this.editando.descricao,
        data: this.editando.data,
        estaativo: this.editando.estaativo,
        tipo: this.editando.tipo,
        periodo: this.editando.periodo
      };
      window.localStorage.setItem(this.editando.codigo, JSON.stringify(this.texto));
      console.log(this.texto);
    } else {
      const d = new Disciplina(this.codigo, this.nome, this.descricao, this.data, this.estaativo, this.tipo, this.periodo);
      this.editar_ok = true;
      this.texto = {
        codigo:  d.codigo,
        nome: d.nome,
        descricao: d.descricao,
        data: d.data,
        estaativo: d.estaativo,
        tipo: d.tipo,
        periodo: d.periodo
      };
      window.localStorage.setItem(this.codigo + "", JSON.stringify(this.texto));
      console.log(this.texto);
      this.disciplinas.push(d);
      this.salvar_ok = true;

    }
    this.baixa();
    this.nome = null;
    this.descricao = null;
    this.codigo = null;
    this.data = null;
    this.estaativo = null;
    this.tipo = null;
    this.periodo = null;
    this.editando = null;
  }

  excluir(disciplina) {
    this.redefinir();
    // tslint:disable-next-line:triple-equals
    if (this.editando == disciplina) {
      alert('Você não pode excluir uma disciplina que está editando');
    } else {
      if (confirm('Tem certeza que deseja excluir a disciplina "'
          + disciplina.nome + '"?')) {
        const i = this.disciplinas.indexOf(disciplina);
        this.disciplinas.splice(i, 1);
        const j = localStorage.key(disciplina.codigo);
        localStorage.removeItem(j);
        this.excluir_ok = true;
      }
    }
  }

  editar(disciplina) {
    this.redefinir();
    this.editando = disciplina;
    this.nome = disciplina.nome;
    this.descricao = disciplina.descricao;
    this.codigo = disciplina.codigo;
    this.data = disciplina.data;
    this.estaativo = disciplina.estaativo;
    this.tipo = disciplina.tipo;
    this.periodo = disciplina.periodo;
  }

  cancelar() {
    this.redefinir();
  }

  redefinir() {
    this.nome = null;
    this.descricao = null;
    this.codigo = null;
    this.data = null;
    this.estaativo = null;
    this.tipo = null;
    this.periodo = null;
    this.editando = null;
    this.excluir_ok = false;
    this.salvar_ok = false;
    this.editar_ok = false;
  }
}
