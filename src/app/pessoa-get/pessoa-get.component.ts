import { Component, OnInit } from '@angular/core';
import { MessageControl } from '../MessageControl';
import { Pessoa } from '../Pessoa';
import { PessoasService } from '../pessoas.service';

@Component({
  selector: 'app-pessoa-get',
  templateUrl: './pessoa-get.component.html',
  styleUrls: ['./pessoa-get.component.css']
})

export class PessoaGetComponent implements OnInit {

  // Lista de clientes apresenta na tela principal
  pessoas: Pessoa[];

  // Variaveis de controle para passar mensagens
  hasMessage: boolean;
  message: any;

  constructor(private ps: PessoasService) { }

  ngOnInit() {

    // Carrega os clientes do local storage
    this.pessoas = this.ps.getPessoas();

    // Carrega as mensagens, se houver
    this.hasMessage = MessageControl.hasMessage();
    this.message = MessageControl.getMessage();
  }

  // Ação para remover um cliente
  deletePessoa(id) {
    this.ps.deletePessoa(id);
    this.pessoas = this.ps.getPessoas();
  }

}
