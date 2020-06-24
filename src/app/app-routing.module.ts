import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgregarEditarComentariosComponent } from './componets/agregar-editar-comentarios/agregar-editar-comentarios.component';
import { VerComentariosComponent } from './componets/ver-comentarios/ver-comentarios.component';
import { ListComentariosComponent } from './componets/list-comentarios/list-comentarios.component';


const routes: Routes = [
  {path: 'agregar', component:AgregarEditarComentariosComponent},
  {path: 'editar/:id', component:AgregarEditarComentariosComponent},
  {path: 'ver/:id', component:VerComentariosComponent},
  {path: '', component:ListComentariosComponent, pathMatch: 'full'},
  //si colocan una direccion que no es valida aria lo siguiente
  {path: '**', redirectTo: '/'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
