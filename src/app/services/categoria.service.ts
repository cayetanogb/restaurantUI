import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private urlCateg: string = "http://localhost:3000/categorias";

  constructor(private http: HttpClient) { }

  getCategorias(): Observable<any> {
    return this.http.get<any>(this.urlCateg);
  }

  getCategoria(id): Observable<any> {
    if (id) return this.http.get<any>(this.urlCateg+'/'+id);
  }
}
