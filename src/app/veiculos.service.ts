import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class VeiculosService {

  // API para buscar as informações dos veículos
  URL = "https://parallelum.com.br/fipe/api/v1/carros/marcas"

  constructor(
    private http: HttpClient
  ) { }

  // Busca as marcas
  getMarcas() {
    return this.http.get(`${this.URL}`);
  }

  // Busca os modelos
  getModelos(marca) {
    return this.http.get(`${this.URL}/${marca}/modelos`);
  }

}
