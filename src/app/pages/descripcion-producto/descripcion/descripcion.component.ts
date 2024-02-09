import { Component } from '@angular/core';

@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.component.html',
  styleUrls: ['./descripcion.component.scss']
})
export class DescripcionComponent {
  cantidad: number = 0;

  increment() {
    this.cantidad++;
  }

  decrement() {
    if (this.cantidad > 1) {
      this.cantidad--;
    }
  }
}
