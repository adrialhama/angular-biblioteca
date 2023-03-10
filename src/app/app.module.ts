import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { PeticiongetComponent } from './components/peticionget/peticionget.component';
import { PeticionpostComponent } from "./components/peticionpost/peticionpost.component";
import { PeticiondeleteComponent } from './components/peticiondelete/peticiondelete.component';
import { PeticionputComponent } from './components/peticionput/peticionput.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { PieComponent } from './components/pie/pie.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { CrearLibrosComponent } from './components/crear-libros/crear-libros.component';
//import { CrearUsuariosComponent } from './componentes/crear-usuarios/crear-usuarios.component';
//import { ListarUsuariosComponent } from './componentes/listar-usuarios/listar-usuarios.component';


import { RouterModule,Routes } from '@angular/router';

import {MatToolbarModule} from '@angular/material/toolbar';
//import { BorrarUsuarioComponent } from './componentes/borrar-usuario/borrar-usuario.component';
import { BorrarLibroComponent } from './components/borrar-libro/borrar-libro.component';
//import { ActualizarUsuarioComponent } from './componentes/actualizar-usuario/actualizar-usuario.component';
import { ActualizarLibroComponent } from './components/actualizar-libro/actualizar-libro.component';
import { LoginComponent } from './components/login/login.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpconfigInterceptor } from './interceptores/httpconfig.interceptor';
import { AuthService } from './services/auth.service';

import { AuthGuard } from './guards/auth.guard';
import { LogoutComponent } from './components/logout/logout.component';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';



const appRoutes:Routes=[
  {path:'Home',component:PrincipalComponent},
  {path:'Login',component:LoginComponent},
  {path:'Logout',canActivate:[AuthGuard],component:LogoutComponent},
  {path:'CrearLibro',canActivate:[AuthGuard],component:CrearLibrosComponent},
  {path:'ActualizarLibro',canActivate:[AuthGuard],component:ActualizarLibroComponent},
  {path:'BorrarLibro',canActivate:[AuthGuard],component:BorrarLibroComponent},
  //{path:'ListarUsuarios',canActivate:[AuthGuard],component:ListarUsuariosComponent},
  //{path:'CrearUsuario20',canActivate:[AuthGuard],component:CrearUsuariosComponent},
  //{path:'BorrarUsuario20',canActivate:[AuthGuard],component:BorrarUsuarioComponent},
  //{path:'ActualizarUsuario21',canActivate:[AuthGuard],component:ActualizarUsuarioComponent},
  {path:'',redirectTo:'/Home', pathMatch:'full'},
  {path:'**',component: PrincipalComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    PieComponent,
    PrincipalComponent,
    CrearLibrosComponent,
    //CrearUsuariosComponent,
    //ListarUsuariosComponent,
    PeticiongetComponent,
    PeticiondeleteComponent,
    PeticionputComponent,
    PeticionpostComponent,
    //BorrarUsuarioComponent,
    BorrarLibroComponent,
    //ActualizarUsuarioComponent,
    ActualizarLibroComponent,
    LoginComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    RouterModule.forRoot(appRoutes),
    MatToolbarModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MdbCarouselModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: HttpconfigInterceptor, multi: true },AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
