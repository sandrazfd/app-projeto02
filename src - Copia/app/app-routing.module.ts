import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidatoNovoComponent } from './components/candidato-novo/candidato-novo.component';
import { CandidatosComponent } from './components/candidatos/candidatos.component';
import { ErroComponent } from './components/erro/erro.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: " ", redirectTo: "home", pathMatch:"full"},
  {path:"home", component:HomeComponent},
  {path:"candidatos", component:CandidatosComponent},
  {path:"candidatos/novo", component:CandidatoNovoComponent},
  {path:"**", component:ErroComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
