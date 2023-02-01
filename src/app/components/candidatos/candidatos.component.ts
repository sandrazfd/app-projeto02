import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidatos',
  templateUrl: './candidatos.component.html',
  styleUrls: ['./candidatos.component.css']
})
export class CandidatosComponent {
  constructor(private router: Router){}

  novoCandidato(): void{
   this.router.navigate(['candidatos/novo'])
  }
}
