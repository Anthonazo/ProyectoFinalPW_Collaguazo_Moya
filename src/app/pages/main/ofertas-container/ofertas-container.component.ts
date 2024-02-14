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
    this.containerEtiquetas = containerEtiquetas;
    this._productosService.getProductosBackend().subscribe((productos: any[]) => {
      this.productos = productos;
    });
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
