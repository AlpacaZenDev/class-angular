import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nueva-tarea',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './nueva-tarea.component.html',
  styleUrl: './nueva-tarea.component.css'
})
export class NuevaTareaComponent {
  @Output() cancelar = new EventEmitter<void>();
  tituloIngresado = '';
  resumenIngresado = '';
  fechaIngresada = '';
  alCancelar() {
    this.cancelar.emit();
  }

}
