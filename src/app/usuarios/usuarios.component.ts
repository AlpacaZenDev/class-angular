import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { type Usuario } from './usuarios.model';


@Component({
  selector: 'app-usuarios',
  standalone: true,
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent {

  @Input({required: true}) usuario!: Usuario;
  @Input({required: true}) seleccionado!: boolean;
  @Output() selection = new EventEmitter<string>();

  get imgPath() {
    return `assets/usuarios/${this.usuario.avatar}`;
  }


  whenSelectingUser() {
    this.selection.emit(this.usuario.id);
  }

}
