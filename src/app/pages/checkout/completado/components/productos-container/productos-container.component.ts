import { Component } from '@angular/core';

@Component({
  selector: 'app-productos-container',
  templateUrl: './productos-container.component.html',
  styleUrls: ['./productos-container.component.scss']
})
export class ProductosContainerComponent {

  cantidad: number = 0;
  precioTotal: number = 0;
  precioUnitario: number = 102.00;

  constructor() {

  }


  increment() {
    this.cantidad++;
    this.precioTotal = this.precioUnitario * this.cantidad;
  }

  decrement() {
    if (this.cantidad > 1) {
      this.cantidad--;
      this.precioTotal = this.precioUnitario * this.cantidad;
    }
  }
}
