import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidatoAlterarComponent } from './components/candidato-alterar/candidato-alterar.component';
import { CandidatoNovoComponent } from './components/candidato-novo/candidato-novo.component';
import { CandidatoRemocaoComponent } from './components/candidato-remocao/candidato-remocao.component';
import { CandidatosComponent } from './components/candidatos/candidatos.component';
import { ErroComponent } from './components/erro/erro.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AutenticaGuard } from './services/autentica.guard';


const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch:"full"},
  {path:"home", component:HomeComponent},
  {path:"candidatos", component:CandidatosComponent},
  {path:"candidatos/novo", component:CandidatoNovoComponent, canActivate:[AutenticaGuard]},
  {path:"candidatos/alterar/:id", component:CandidatoAlterarComponent},
  {path:"candidatos/remover/:id", component:CandidatoRemocaoComponent},
  {path:"login", component:LoginComponent},
  {path:"**", component:ErroComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
