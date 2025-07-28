import { Component } from '@angular/core';

import { EncabezadoComponent } from './encabezado/encabezado.component'; // Ruta correcta
import { UsuariosComponent } from './usuarios/usuarios.component'; // Importar UsuariosComponent
import { USUARIOS_FALSOS } from './usuarios-falsos';
import { TareasComponent } from "./tareas/tareas.component"; // Importar datos de usuarios falsos


@Component({
  selector: 'app-raiz',
  standalone: true,
  imports: [
    EncabezadoComponent,
    UsuariosComponent,
    TareasComponent
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  usuarios = USUARIOS_FALSOS;
  idUsuarioSeleccionado = 'u1';

  get usuarioSeleccionado() {
    return this.usuarios.find((usuario) => usuario.id === this.idUsuarioSeleccionado)!;
  }

  whenSelectingUser(id: string) {
    // console.log(`Usuario seleccionado con el ID ${id}`);
    this.idUsuarioSeleccionado = id;

  }
}
