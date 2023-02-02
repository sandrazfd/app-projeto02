import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { CandidatosComponent } from './components/candidatos/candidatos.component';
import { ErroComponent } from './components/erro/erro.component';
import { FooterComponent } from './components/footer/footer.component';
import { CandidatoListaComponent } from './components/candidato-lista/candidato-lista.component';
import { CandidatoNovoComponent } from './components/candidato-novo/candidato-novo.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    CandidatosComponent,
    ErroComponent,
    FooterComponent,
    CandidatoListaComponent,
    CandidatoNovoComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
