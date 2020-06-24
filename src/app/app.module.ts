import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
//importar libreria para un servicio http
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarEditarComentariosComponent } from './componets/agregar-editar-comentarios/agregar-editar-comentarios.component';
import { NavBarComponent } from './componets/nav-bar/nav-bar.component';
import { ListComentariosComponent } from './componets/list-comentarios/list-comentarios.component';
import { VerComentariosComponent } from './componets/ver-comentarios/ver-comentarios.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    AgregarEditarComentariosComponent,
    NavBarComponent,
    ListComentariosComponent,
    VerComentariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
