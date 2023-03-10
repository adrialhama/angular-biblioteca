import { ApiServiceService } from './../../services/api-service.service';
import { Component } from '@angular/core';
import { Libro } from 'src/app/interfaces/libro';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';



@Component({
  selector: 'app-peticionpost',
  templateUrl: './peticionpost.component.html',
  styleUrls: ['./peticionpost.component.css']
})
export class PeticionpostComponent {
  private libro: Libro[] = [];
  private libr!: Libro;

  protected formulario!: FormGroup;
  protected id!: string;
  protected foto!: string;
  protected titulo!: string;
  protected autor!: string;
  protected editorial!: string;

  // inyectar el servicio en el constructor
  constructor(
    private listarLibros: ApiServiceService,
    private routeRedirect: Router,
    private http: HttpClient
  ) { }

  //suscripción al observable al que se le indica el módulo a insertar
  agregarLibro() {
    this.http.get<any>('/assets/biblioteca.json').subscribe(data => {
      const libros = data.libros;
      const ultimoLibro = libros[libros.length - 1];
      const ultimoId = ultimoLibro.id;
      const nuevoId = ultimoId + 1;
    console.log(this.formulario.value);

      // Crear objeto con los datos del formulario
      this.libr = {
        "id": nuevoId,
        "foto": `${this.formulario.get('foto')?.value}`,
        "titulo": `${this.formulario.get('titulo')?.value}`,
        "autor": `${this.formulario.get('autor')?.value}`,
        "editorial": `${this.formulario.get('editorial')?.value}`
      };
      this.listarLibros.anadirLibro(this.libr).subscribe((libro => { this.libro.push(libro); console.log(this.libro) }));
      this.routeRedirect.navigate(['/Home']);
    });
  }


  ngOnInit(): void {
    this.formulario = new FormGroup({
      id: new FormControl(''),
      foto: new FormControl(''),
      titulo: new FormControl(''),
      autor: new FormControl(''),
      editorial: new FormControl('')
    });
  }
}
