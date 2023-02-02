import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidatoListaComponent } from './components/candidato-lista/candidato-lista.component';
import { CandidatoNovoComponent } from './components/candidato-novo/candidato-novo.component';
import { CandidatosComponent } from './components/candidatos/candidatos.component';
import { ErroComponent } from './components/erro/erro.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AutentiqueGuard } from './services/autentique.guard';

const routes: Routes = [
  {path: " ", redirectTo: "home", pathMatch:"full"},
  {path:"home", component:HomeComponent},
  {path:"candidatos", component:CandidatosComponent},
  {path:"candidatos/novo", component:CandidatoNovoComponent},
  {path:"candidatos/lista", component:CandidatoListaComponent},
  {path:"login", component:LoginComponent},
  {path:"**", component:ErroComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
