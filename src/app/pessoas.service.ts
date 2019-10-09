import { Injectable } from '@angular/core';
import { Pessoa } from './Pessoa';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class PessoasService {

  constructor() {
    // Inicializa as variaveis utilizadas no localStorage
    if (localStorage.getItem('pessoas') === null || localStorage.getItem('pessoas') == undefined) {
      this._updatePessoas([]);
      this._updateSeq(0);
    }
  }

  // Retorna a lista de clientes
  _all() {
    return JSON.parse(localStorage.getItem('pessoas'));
  }
  // Atualiza a lista de clientes
  _updatePessoas(pessoas) {
    console.log ('updating local storage', pessoas);
    localStorage.setItem('pessoas', JSON.stringify(pessoas));
  }
  // Atualiza a sequencia de IDs de cliente
  _updateSeq(n) {
    localStorage.setItem('pessoas_seq', `${n}`);
  }

  // Gera o próximo numero de id de cliente
  nextSeq(){
    let n = parseInt(localStorage.getItem('pessoas_seq')) + 1;
    this._updateSeq(n);
    return n;
  }

  // Retorna os clientes cadastrados
  getPessoas() {
    return this._all();
  }

  // Retorna um cliente com base no ID
  getPessoa ( id : number) {
    return _.find(this._all(), {'id': id});
  }

  // Adiciona um cliente no localStorage
  addPessoa(newPes) {
    let pessoas = this._all();
    pessoas.push(newPes);
    this._updatePessoas(pessoas);
  }

  // Remove um cliente no localStorage
  deletePessoa(id: number) {
    let pessoas = this._all();
    pessoas.splice(_.findIndex(pessoas, { 'id': id }), 1);
    this._updatePessoas(pessoas);
  }

  // Atualiza um cliente no localStorage
  updatePessoa(newPes){
    let pessoas = this._all();
    pessoas.splice(_.findIndex(pessoas, {'id': newPes.id}), 1, newPes );
    this._updatePessoas (pessoas);
  }
  
  // Verifica se o CPF informado já está cadastrado
  cpfExists (cpf) {
    let pessoas = this._all();
    return _.findIndex(pessoas, { 'cpf': cpf }) > 0;
  }

}
