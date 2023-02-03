import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CandidatosService } from './../../services/candidatos.service';
import { Candidato } from './../../interfaces/candidato';

import { Endereco } from './../../interfaces/endereco';

@Component({
  selector: 'app-candidato-remocao',
  templateUrl: './candidato-remocao.component.html',
  styleUrls: ['./candidato-remocao.component.css']
})
export class CandidatoRemocaoComponent implements OnInit{

  constructor(
    private route:ActivatedRoute,
    private router: Router,
    private candidatoService:CandidatosService,
    ){}


    candidato!: Candidato;
    id!: string;
    endereco!:Endereco;

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') as string;
    this.candidatoService.getEnderecoApi(parseInt(this.id)).subscribe(res => this.endereco = res)
  
  }

  fechar(): void{
    this.router.navigate(['candidatos'])
  }

  remover(): void{
    this.candidatoService.deleteCandidatoApi(parseInt(this.id)).subscribe(()=> this.fechar());
  }

}
