import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
 token=localStorage.getItem('token');
      


  ngOnInit(): void {
    if (this.token){
      localStorage.removeItem('token');
      setTimeout(() => {
        window.location.href = '/home';
      }, 1500); //Redirige al home en 1,5 seg
    }
  }

}
