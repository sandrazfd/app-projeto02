import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidato } from './../interfaces/candidato';


@Injectable({
  providedIn: 'root'
})
export class CandidatosService {

  constructor(private http:HttpClient) { }

  public getCandidatos() : Candidato[]{
    return[
      // {nome: 'Sandra', cpf:'21547854125',datanascimento:'20-05-2012', email:'sandra@mail.com',telefone:'65841235'},
      // {nome: 'Luis', cpf:'65231478541',datanascimento:'25-02-2008', email:'luis@mail.com',telefone:'65841235'},
      // {nome: 'Fernando', cpf:'65214258741',datanascimento:'03-12-2000', email:'fefe@mail.com',telefone:'65841235'},
      // {nome: 'Jairo', cpf:'87451269541',datanascimento:'28-08-2014', email:'jairo@mail.com',telefone:'65841235'},
      // {nome: 'Carmem', cpf:'98721458743',datanascimento:'14-03-2006', email:'carmem@mail.com',telefone:'65841235'}
    ];
  }

  baseUrl: string = "http://localhost:5175/api/candidato";

  public getCandidatoApi() : Observable<Candidato[]>{
    return this.http.get<Candidato[]>(this.baseUrl);
  }
  
  //incluir candidato
  public postCandidatoApi(candidato:Candidato) : Observable<Candidato>{
    return this.http.post<Candidato>(this.baseUrl,candidato);
  }
}
