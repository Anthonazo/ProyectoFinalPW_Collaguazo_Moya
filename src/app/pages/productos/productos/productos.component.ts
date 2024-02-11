import { Component } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent {
  productos: any[] = [];

  constructor(private _productosService: ProductoService) {
    this.productos = _productosService.getProductos();
  }

}
