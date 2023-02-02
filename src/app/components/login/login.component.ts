import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from './../../services/usuarios.service';
import { Usuario } from './../../classes/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {}