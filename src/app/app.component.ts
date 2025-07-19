import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { EncabezadoComponent } from './encabezado/encabezado.component'; // Ruta correcta
import { UsuariosComponent } from './usuarios/usuarios.component'; // Importar UsuariosComponent


@Component({
  selector: 'app-raiz',
  standalone: true,
  imports: [
    CommonModule,
    EncabezadoComponent,
    UsuariosComponent, // Añadir a imports
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
