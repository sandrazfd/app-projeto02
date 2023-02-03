import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidato } from './../interfaces/candidato';
import { Endereco } from './../interfaces/endereco';


@Injectable({
  providedIn: 'root'
})
export class CandidatosService {

  constructor(private http:HttpClient) { }

 

  baseUrl: string = "http://localhost:5175/api/candidato";

//lista
  public getCandidatosApi() : Observable<Candidato[]>{
    return this.http.get<Candidato[]>(this.baseUrl);
  }
 
  //buscar
  public getCandidatoApi(id: number) :Observable<Candidato>{
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Candidato>(url);
  }
  
 
  //inclui
  public postCandidatoApi(candidato:Candidato) : Observable<Candidato>{
    return this.http.post<Candidato>(this.baseUrl,candidato);
  }

  //alterar
  public putCandidatoApi(candidato: Candidato, id : number): Observable<Candidato>{
    const url = `${this.baseUrl}/${id}`;
    return this.http.put<Candidato>(url,candidato);
  }
  

  public getEnderecoApi(id: number) :Observable<Endereco>{
    const url = `${this.baseUrl}/endereco/${id}`;
    return this.http.get<Endereco>(url);
  }
  public deleteCandidatoApi(id:number) : Observable<Endereco>{
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Endereco>(url);
  }

}
