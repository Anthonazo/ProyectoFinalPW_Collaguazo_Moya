import { Component } from '@angular/core';

@Component({
  selector: 'app-carrito-card',
  templateUrl: './carrito-card.component.html',
  styleUrls: ['./carrito-card.component.scss']
})
export class CarritoCardComponent {
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
