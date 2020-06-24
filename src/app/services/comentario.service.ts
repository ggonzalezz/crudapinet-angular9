import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comentario } from '../models/comentario';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {
  myAppUrl = 'https://localhost:44388/';
  myApiUrl = 'api/comentario/';

  //heders para 
  httpOptions = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json'
     })
  };
  constructor(private http: HttpClient) { }

  //listar comentarios
  getListComentario(): Observable<Comentario[]>{
    return this.http.get<Comentario[]>(this.myAppUrl + this.myApiUrl);
  }
  //Eliminar comentarios
  deleteComentario(id: number): Observable<Comentario>{
    return this.http.delete<Comentario>(this.myAppUrl + this.myApiUrl + id );
  }
  //guardar comentarios
  guardarComentario(comentario: Comentario): Observable<Comentario>{
    return this.http.post<Comentario>(this.myAppUrl + this.myApiUrl, comentario, this.httpOptions);
  }
  //cargar un solo comentario
  cargarComentario(id: number): Observable<Comentario> {
    return this.http.get<Comentario>(this.myAppUrl + this.myApiUrl + id);
  }
  //actualizar comentario
  actualizarComentario(id: number, Comentario: Comentario): Observable<Comentario>{
    return this.http.put<Comentario>(this.myAppUrl + this.myApiUrl + id , Comentario, this.httpOptions);
  }
}
