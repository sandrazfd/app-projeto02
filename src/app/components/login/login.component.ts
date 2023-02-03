import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from './../../services/usuarios.service';
import { Usuario } from './../../classes/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(
    private router:Router, 
    private usuariosService:UsuariosService){}

    user!:Usuario;
    erro!:string;
    storage: Storage = localStorage;


  ngOnInit(): void {
    this.user = new Usuario();
    this.storage.removeItem('username')
  }

  fechar() : void{
    this.router.navigate(['/candidatos'])
  }

  validar(usuario: Usuario): void{
this.usuariosService.postUsuarioApi(usuario).subscribe(res=>{
  if(res){
    this.storage.setItem('username',usuario.nome);
       this.fechar();
    }else{
       this.erro = "Usuário ou senha inválidos"
    }
});


  }
}