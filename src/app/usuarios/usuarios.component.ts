import { Component, EventEmitter, Input, Output, output } from '@angular/core';


@Component({
  selector: 'app-usuarios',
  standalone: true,
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent {

  @Input({required: true}) id!: string;
  @Input({required: true}) avatar!: string;
  @Input({required: true}) nombre!: string;
  @Output() selection = new EventEmitter<string>();

  get imgPath() {
    return `assets/usuarios/${this.avatar}`;
  }


  whenSelectingUser() {
    this.selection.emit(this.id);
  }

}
