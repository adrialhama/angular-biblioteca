import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuarios } from "../interfaces/usuarios";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private apiUrl = 'http://localhost:5555/usuarios'; // Cambia esta URL por la ruta de tu archivo JSON

    constructor(private http: HttpClient) { }

    login(email: string, password: string): Observable<any> {
        return this.http.get<Usuarios>(`${this.apiUrl}?usuario=${email}&contrasena=${password}`);
    }

    /*logout(): void {
        localStorage.removeItem('token');
        setTimeout(() => {
            window.location.href = '/home';
          }, 5000); // 5000 milisegundos = 5 segundos
        // redirigir al usuario a la página de Home
    }      

    isLoggedIn(): boolean {
        return localStorage.getItem('token') !== null;
        // Si el token existe, entonces el usuario ha iniciado sesión; de lo contrario, el usuario no ha iniciado sesión
    } 
    */     

}