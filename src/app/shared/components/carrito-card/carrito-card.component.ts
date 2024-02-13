import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DetallesCarrito } from 'src/app/models/detallesCarrito';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-carrito-card',
  templateUrl: './carrito-card.component.html',
  styleUrls: ['./carrito-card.component.scss']
})
export class CarritoCardComponent {
  precioTotal: number = 0;
  precioUnitario: number = 0;
  producto?: Producto;
  cantidad: number = 0;

  totalFactura: number = 0;

  @Input() detalle?: DetallesCarrito;

  @Output() precioTotalChange: EventEmitter<number> = new EventEmitter<number>();

  constructor(private _productoService: ProductoService) {

  }

  ngOnInit() {
    if (this.detalle) {
      const idProducto = this.detalle.codigoProducto
      if (idProducto) {
        this._productoService.getProductoPorId(idProducto).subscribe(
          (data) => {
            this.producto = data;
            if (this.producto?.precio) {
              this.precioUnitario = this.producto?.precio;
              console.log(this.precioUnitario);
              this.precioTotal = this.precioUnitario * this.cantidad;
              this.precioTotalChange.emit(this.precioTotal);
            }
            console.log(data)
          },
          (error) => {
            console.error('Error al obtener los productos:', error);
          });
      }
    }
    if (this.detalle?.cantidad) {
      this.cantidad = this.detalle?.cantidad;
    }

  }


  increment() {
    if (this.cantidad) {
      this.cantidad++;
      this.precioTotal = this.precioUnitario * this.cantidad;
    }

  }

  decrement() {
    if (this.cantidad && this.cantidad > 1) {
      this.cantidad--;
      this.precioTotal = this.precioUnitario * this.cantidad;
    }
  }
}
