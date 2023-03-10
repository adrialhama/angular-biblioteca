import { ApiServiceService } from './../../services/api-service.service';
import { Component } from '@angular/core';
import { Libro } from 'src/app/interfaces/libro';


@Component({
  selector: 'app-peticionget',
  templateUrl: './peticionget.component.html',
  styleUrls: ['./peticionget.component.css']
})
export class PeticiongetComponent {
  libro:Libro[]=[];

  // inyectar el servicio en el constructor
  constructor(private listarlibros:ApiServiceService){

  }

  //nos suscribimos al servicio
  ngOnInit(): void{
    this.listarlibros.listarLibros().subscribe(libro=>{(this.libro=libro);console.log(libro)});

  }

}


