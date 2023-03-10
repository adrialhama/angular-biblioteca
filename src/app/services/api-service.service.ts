
//importación de la interface
import { Libro } from '../interfaces/libro';
//importación del injectable para poder inyectar el servicio a los componentes
import { Injectable } from '@angular/core';
//importación de HttpClient para peticiones asíncronas y Headers para las cabeceras
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
//importación de observable para poder suscribirse los observadores
import { map, Observable } from 'rxjs';
import { coerceNumberProperty } from '@angular/cdk/coercion';

//cabeceras indicando el tipo de información a enviar
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', }),
};


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  //url de la API de la que se va a consumir
  private apiUrl = "http://localhost:5555";
  private url = "";

  // variable http para poder reallizar peticiones asíncronas a la API
  constructor(private http: HttpClient) { }

  //Petición de tipo get que devuelve un observable de array de objetos del tipo Libro de la interface
  listarLibros(): Observable<Libro[]> {
    this.url = `${this.apiUrl}/libros`;
    return this.http.get<Libro[]>(this.url);
  }
  //Petición de tipo post al que se le pasa el módulo (de tipo de interface Libro) y que igualmetne devulve un observable

  anadirLibro(Libro: Libro): Observable<Libro> {
    this.url = `${this.apiUrl}/libros`;
    return this.http.post<Libro>(this.url, Libro, httpOptions);
  }

  // Petición tipo delete al que le pasamos solo el id del módulo a borrar devolviendo el observable
  borrarLibro(idLibro: number): Observable<Libro> {
    this.url = `${this.apiUrl}/libros/${idLibro}`;
    return this.http.delete<Libro>(this.url);
  }

  //Petición de tipo update al que se le pasa el módulo a actualizar y que devuelve un observable
  updateLibro(libro: Libro): Observable<Libro> {
    this.url = `${this.apiUrl}/libros/${libro.id}`;
    return this.http.put<Libro>(this.url, libro, httpOptions);
  }


}


