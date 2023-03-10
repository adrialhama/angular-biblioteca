import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Libro } from 'src/app/interfaces/libro';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-peticiondelete',
  templateUrl: './peticiondelete.component.html',
  styleUrls: ['./peticiondelete.component.css']
})
export class PeticiondeleteComponent implements OnInit {
  formulario!: FormGroup;
  libro: Libro[] = [];

  constructor(private borrarlibro: ApiServiceService) {}

  ngOnInit(): void {
    this.formulario = new FormGroup({
      id: new FormControl('', Validators.required)
    });
  }

  borrarLibro(): void {
    const id = this.formulario.get('id')?.value as number;
    this.borrarlibro.borrarLibro(id).subscribe(() => {
      this.libro = this.libro.filter(l => l.id !== id);
      console.log(`Libro ${id} eliminado`);
      setTimeout(() => {
        window.location.href = '/home';
      }, 1500); //Redirige al home en 1,5 seg
    });
  }
}
