import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';
import { Producto } from '../../../models/producto';

@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.component.html',
  styleUrls: ['./descripcion.component.scss']
})
export class DescripcionComponent {
  cantidad: number = 0;
  precioTotal: number = 0;
  precioUnitario: number = 102.00;
  producto!: Producto;

  constructor(private _route: ActivatedRoute,
    private _productoService: ProductoService,) {

  }
  ngOnInit(){
    const identificador = parseInt(this._route.snapshot.paramMap.get('identificador') || '0');
    this._productoService.getProductoPorId(identificador).subscribe(
      (data) => {
        this.producto = data;
      },
      (error) => {
        console.error('Error al obtener el producto:', error);
      })
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
