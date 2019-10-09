import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PessoasService } from '../pessoas.service';
import { VeiculosService } from '../veiculos.service';
import { CustomValidator } from '../CustomValidator';
import { Pessoa } from '../Pessoa';
import { MessageControl } from '../MessageControl';
import * as _ from 'lodash';

@Component({
  selector: 'app-pessoa-save',
  templateUrl: './pessoa-save.component.html',
  styleUrls: ['./pessoa-save.component.css']
})

/*
    Componente para adicionar e editar clientes
*/ 

export class PessoaSaveComponent implements OnInit {

  // Identificador e dados do cliente a ser inserido/alterado
  id: number;
  pessoa: Pessoa;

  // Carrega informações para listagem dos veículos
  veiculoMarcas: any [];
  veiculoModelos: any [];
  selectedMarca: string;
  selectedModelo: string;

  // Variavel para passar mensagem à tela inicial
  textLabel: string;

  // Formulario
  pesForm: FormGroup;


  // Inicializa o formulario de cliente no construtor
  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private formBuilder: FormBuilder, 
    private ps: PessoasService,
    private vs: VeiculosService) 
  {
    this.createForm();
  }

  createForm() {
    // Configura as validações dos campos do formulário
    this.pesForm = this.formBuilder.group({
      PesNome: ['', Validators.required],
      PesCPF: ['', [Validators.required, CustomValidator.isValidCpf()]],
      PesTelefone: ['', Validators.required],
      PesDtNasc: ['', Validators.required],
      PesEndereco: ['', Validators.required],
      PesVeiculoMarca: ['', Validators.required],
      PesVeiculoModelo: ['', Validators.required],
    });
    this.selectedMarca = "";
    this.selectedModelo = "";
  }

  // Metodo para adicionar E editar cliente
  savePessoa(PesNome, PesCPF, PesTelefone, PesDtNasc, PesEndereco) {

    // Carrega as informações do formulário
    let newPes = new Pessoa({
      id: this.id, 
      nome: PesNome, 
      cpf: PesCPF,
      telefone: PesTelefone,
      dtnasc: PesDtNasc,
      endereco: PesEndereco,
      veiculoNome: _.find(this.veiculoMarcas, {'codigo': this.selectedMarca}).nome + ' ' + _.find(this.veiculoModelos, {'codigo': this.selectedModelo}).nome,
      veiculoMarca: this.selectedMarca,
      veiculoModelo: this.selectedModelo
    });
    
    // Se o identificador do cliente já estiver setado,
    // trata a ação como um update do cliente já armazenado
    if (newPes.id > 0) {
      this.ps.updatePessoa(newPes);
      MessageControl.setMessage('Os dados do cliente foram salvos com sucesso.')

    // Senão, adiciona um novo cliente
    } else {

      // Valida se o CPF informado já não está cadastrado
      if (!this.ps.cpfExists(PesCPF)){
        newPes.id = this.ps.nextSeq();
        this.ps.addPessoa(newPes);
        MessageControl.setMessage('Cliente adicionado com sucesso.')
      } else {
        MessageControl.setErrorMessage('Não foi possível adicionar o cliente: o CPF informado já está cadastrado.')
      }
    }
    // Retorna para a tela de listagem de clientes
    this.router.navigate(['pessoas']);
  }

  // Carrega os modelos de veículo de acordo 
  // com a marca, quando ela for selecionada
  changeMarcaVeiculo(marca, modelo="") {
    this.selectedModelo = modelo;
    this.vs.getModelos(marca).subscribe((data: any) => {
      this.veiculoModelos = data.modelos;
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      // Le os parametros da URL para verificar 
      // se a ação é de edição ou inserção
      this.id = _.has(params, 'id') ? parseInt(params.id) : 0;      

      // Se o formulario foi acessado para edição, carrega os dados
      if (this.id > 0) {
        this.pessoa = this.ps.getPessoa(this.id);
        this.selectedMarca = this.pessoa.veiculoMarca;
        this.changeMarcaVeiculo(this.pessoa.veiculoMarca, this.pessoa.veiculoModelo);

      // Senao inicializa-o vazio
      } else {
        this.pessoa = new Pessoa(); 
      }

      // Carrega as marcas de veiculos
      this.vs.getMarcas().subscribe((data: any) => {
        this.veiculoMarcas = data;
      });
      
    });
    // Ajusta o label do botão de submit de acordo com o contexto
    this.textLabel = this.id ? "Salvar" : "Adicionar";
  }

}
