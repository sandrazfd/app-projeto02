import { Component, OnInit } from '@angular/core';
import { Candidato } from 'src/app/interfaces/candidato';
import { CandidatosService } from './../../services/candidatos.service';

@Component({
  selector: 'app-candidato-lista',
  templateUrl: './candidato-lista.component.html',
  styleUrls: ['./candidato-lista.component.css']
})
export class CandidatoListaComponent implements OnInit {


  constructor(private candidatosService: CandidatosService){}

  ngOnInit(): void {
   
   this.candidatosService.getCandidatosApi().subscribe(resposta=> this.candidatos = resposta);

  }
  candidatos: Candidato[] = [];
  
  
  

}
