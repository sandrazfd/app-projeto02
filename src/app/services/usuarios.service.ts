import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../classes/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient){}

  baseUrl: string = "http://localhost:5175/api/usuario"

  public postUsuarioApi(usuario:Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(this.baseUrl, usuario);
  }

  public get usuarios() : string[]{
    return[
      'admin', 'empresa','convidado' ]
  }
}