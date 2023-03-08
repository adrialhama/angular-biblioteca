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
        return this.http.get(`${this.apiUrl}?usuario=${email}&contrasena=${password}`);
    }

    logout(): void {
        // Implementa el código necesario para cerrar sesión
    }

    isLoggedIn(): boolean {
        // Implementa el código necesario para verificar si el usuario ha iniciado sesión
        return false;
    }

}
