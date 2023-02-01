import { Injectable } from '@angular/core';
import { Sexo } from '../interfaces/sexo';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SexosService {

  constructor(private http:HttpClient) { }

  public getSexos() : Sexo[]{
    return[
      {id: 1, descricao:'MASCULINO'},
      {id: 2, descricao:'FEMININO'},
      {id: 3, descricao:'OUTROS'}
    ];
  }
}
