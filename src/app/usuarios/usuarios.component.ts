import { Component, EventEmitter, Input, Output, output } from '@angular/core';

interface Usuario {
    id: string;
    avatar: string;
    nombre: string;
}

/*
type Usuario = {
    id: string;
    avatar: string;
    nombre: string;
  }
*/

@Component({
  selector: 'app-usuarios',
  standalone: true,
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent {

  @Input({required: true}) usuario!: Usuario;
  @Output() selection = new EventEmitter<string>();

  get imgPath() {
    return `assets/usuarios/${this.usuario.avatar}`;
  }


  whenSelectingUser() {
    this.selection.emit(this.usuario.id);
  }

}
