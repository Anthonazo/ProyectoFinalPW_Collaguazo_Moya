import { Component } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-ofertas-container',
  templateUrl: './ofertas-container.component.html',
  styleUrls: ['./ofertas-container.component.scss']
})
export class OfertasContainerComponent {
  productos: any[] = [];

  constructor(private _productosService: ProductoService) {
    this.productos = _productosService.getProductos();
  }

}
