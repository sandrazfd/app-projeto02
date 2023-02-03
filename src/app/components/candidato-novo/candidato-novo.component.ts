import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Candidato } from 'src/app/interfaces/candidato';

import { CandidatosService } from 'src/app/services/candidatos.service';
import { SexosService } from './../../services/sexos.service';
import { EscolaridadeService } from './../../services/escolaridade.service';
import { Escolaridade } from './../../interfaces/escolaridade';
import { Sexo } from './../../interfaces/sexo';



@Component({
  selector: 'app-candidato-novo',
  templateUrl: './candidato-novo.component.html',
  styleUrls: ['./candidato-novo.component.css']
})
export class CandidatoNovoComponent implements OnInit{

  constructor(private router:Router,
    private candidatoService:CandidatosService,
    private sexoService:SexosService,
    private escolaridadeService:EscolaridadeService,
   ){}

  ngOnInit(): void {
   
   this.candidato ={id:0, nome:'', cpf:'', dataNascimento:'', telefone:'', email:'', idEscolaridade:0, idSexo: 0 , idEndereco:0, logradouro:'',numero:0 , cep:'', cidade:'', uf:'' }; 
   this.sexos = this.sexoService.getSexos();
   this.escolaridades = this.escolaridadeService.getEscolaridade();
   
  }

  candidato!: Candidato;
  escolaridades!: Escolaridade[];
  sexos! : Sexo[];

  

  fechar(): void{
    this.router.navigate(['candidatos']);
  }

 incluir(candidato:Candidato) : void{

  this.candidatoService.postCandidatoApi(candidato)
  .subscribe(()=> this.router.navigate(['candidatos/lista']));
 }
 

  

}
