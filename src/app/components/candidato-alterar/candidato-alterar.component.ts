import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CandidatosService } from './../../services/candidatos.service';
import { Candidato } from './../../interfaces/candidato';
import { Escolaridade } from './../../interfaces/escolaridade';
import { Sexo } from './../../interfaces/sexo';

@Component({
  selector: 'app-candidato-alterar',
  templateUrl: './candidato-alterar.component.html',
  styleUrls: ['./candidato-alterar.component.css']
})
export class CandidatoAlterarComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private candidatoService: CandidatosService){}

    candidato!: Candidato;
    id!: string;
    escolaridades!: Escolaridade[];
    sexos! : Sexo[];


  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') as string;
    this.candidatoService.getCandidatoApi(parseInt(this.id))
    .subscribe(res => this.candidato = res)
  }

  fechar() : void{
    this.router.navigate(['candidatos'])
  }

  alterar(candidato : Candidato): void{
    this.candidatoService.putCandidatoApi(candidato, parseInt(this.id))
    .subscribe(()=> this.fechar());
  }
}
