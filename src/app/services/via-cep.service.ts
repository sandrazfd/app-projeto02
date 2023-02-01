import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ViaCep } from '../interfaces/via-cep';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ViaCepService {

  constructor(private http:HttpClient) { }

   //public getEndereco():Observable<ViaCep>(){
    //return this.http.get<ViaCep>("https://viacep/")
}

