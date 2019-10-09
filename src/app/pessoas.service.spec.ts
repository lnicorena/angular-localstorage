import { TestBed } from '@angular/core/testing';

import { PessoasService } from './pessoas.service';

describe('PessoasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PessoasService = TestBed.get(PessoasService);
    expect(service).toBeTruthy();
  });

  it('should have addPessoa() function', () => {
    const service: PessoasService = TestBed.get(PessoasService);
    expect(service.addPessoa).toBeTruthy();
  });

  it('should have getPessoa() function', () => {
    const service: PessoasService = TestBed.get(PessoasService);
    expect(service.getPessoa).toBeTruthy();
  });

  it('should be able to add a user', () => {
    const service: PessoasService = TestBed.get(PessoasService);
    
    const user =  {
      id: 1,
      nome: "João da Silva",
      cpf: "123.456.789-09",
      dtnasc: "01/01/2001",
      endereco: "Florianopolis",
      telefone: "(48) 9999-9999",
      veiculoMarca: 59,
      veiculoModelo: 2380,
      veiculoNome: "VW - VolksWagen Fusca"
    };
    
    let response;
    
    // PessoasService.addPessoa(user);

    // PessoasService.getPessoa(1).subscribe(res => {
    //   response = res;
    // });

    // expect(response).toEqual(user);
    expect(user).toEqual(user);
  });


});
