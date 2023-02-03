import { Pipe, PipeTransform } from '@angular/core';
import { Candidato } from './../interfaces/candidato';

@Pipe({
  name: 'busca'
})
export class BuscaPipe implements PipeTransform {

  transform(candidato: Candidato[], input: string): Candidato[] {
    if(!input){
      return candidato;
    }else{
      return candidato.filter(c=> c.nome.toLowerCase().includes(input.toLowerCase()));
    }
  }

}
