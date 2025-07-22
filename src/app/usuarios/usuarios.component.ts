import { Component } from '@angular/core';

import { USUARIOS_FALSOS } from '../usuarios-falsos';
const IndiceAleatorio = Math.floor(Math.random() * USUARIOS_FALSOS.length);



@Component({
  selector: 'app-usuarios',
  standalone: true,
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent {

  usuarioSeleccionado = USUARIOS_FALSOS[IndiceAleatorio];

  get imgPath() {
    return 'assets/usuarios/' + this.usuarioSeleccionado.avatar
  }

}
