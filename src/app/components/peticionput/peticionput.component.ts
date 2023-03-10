import { ApiServiceService } from './../../services/api-service.service';
import { Component } from '@angular/core';
import { Libro } from 'src/app/interfaces/libro';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-peticionput',
  templateUrl: './peticionput.component.html',
  styleUrls: ['./peticionput.component.css']
})
export class PeticionputComponent {
  libro: Libro[] = [];
  protected libr!: Libro;

  protected formulario!: FormGroup;
  protected id!: number;
  protected foto!: string;
  protected titulo!: string;
  protected autor!: string;
  protected editorial!: string;

  // inyectar el servicio siempre en el constructor a través de la variable actualizarmodulo
  constructor(private listarLibros: ApiServiceService, private routeRedirect: Router) {
    
  }

  //se suscribe al observable que devuelve el método updateModulo del servicio
  updateLibro() {
    this.libr = {
      "id": parseInt(`${this.formulario.get('id')?.value}`),
      "titulo": `${this.formulario.get('titulo')?.value}`,
      "foto": `${this.formulario.get('foto')?.value}`,
      "autor": `${this.formulario.get('autor')?.value}`,
      "editorial": `${this.formulario.get('editorial')?.value}`
    };
    this.listarLibros.updateLibro(this.libr).subscribe();
    this.routeRedirect.navigate(['/Home']);
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
