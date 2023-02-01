import { Injectable } from '@angular/core';
import { Escolaridade } from '../interfaces/escolaridade';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EscolaridadeService {

  constructor(private http:HttpClient) { }

  public getEscolaridade() : Escolaridade[]{
    return[
      {id: 1, descricao:'ENSINO FUNDAMENTAL INCOMPLETO'},
      {id: 2, descricao:'ENSINO FUNDAMENTAL COMPLETO'},
      {id: 3, descricao:'ENSINO MEDIO INCOMPLETO'},
      {id: 4, descricao:'ENSINO MEDIO COMPLETO'},
      {id: 5, descricao:'ENSINO SUPERIOR INCOMPLETO'},
      {id: 6, descricao:'ENSINO SUPERIOR COMPLETO'},
      {id: 7, descricao:'POS GRADUACAO'},
      {id: 8, descricao:'MESTRADO'},
      {id: 9, descricao:'DOUTORADO'}
    ]
  }
}
