import { Component, ElementRef, ViewChild } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-ofertas-container',
  templateUrl: './ofertas-container.component.html',
  styleUrls: ['./ofertas-container.component.scss']
})
export class OfertasContainerComponent {
  productos: any[] = [];
  @ViewChild('containerEtiquetas') containerEtiquetas: ElementRef;
  constructor(private _productosService: ProductoService, containerEtiquetas: ElementRef) {
    this.productos = _productosService.getProductos();
    this.containerEtiquetas = containerEtiquetas;
  }

  scrollToRight() {
    const container = this.containerEtiquetas.nativeElement;
    container.scrollLeft += 400;
  }

  scrollToLeft() {
    const container = this.containerEtiquetas.nativeElement;
    container.scrollLeft -= 400;
  }
}
