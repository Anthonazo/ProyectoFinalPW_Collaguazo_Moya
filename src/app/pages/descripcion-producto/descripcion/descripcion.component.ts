import { Component } from '@angular/core';

@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.component.html',
  styleUrls: ['./descripcion.component.scss']
})
export class DescripcionComponent {
  cantidad: number = 0;
  precioTotal: number = 0;
  precioUnitario: number = 102.00;

  constructor() {

  }


  increment() {
    this.cantidad++;
    this.precioTotal = this.precioTotal * this.cantidad;
  }

  decrement() {
    if (this.cantidad > 1) {
      this.cantidad--;
      this.precioTotal = this.precioTotal * this.cantidad;
    }
  }
}
