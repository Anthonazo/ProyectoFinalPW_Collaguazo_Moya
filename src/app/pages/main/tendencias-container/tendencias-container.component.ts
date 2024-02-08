import { Component, ElementRef, ViewChild } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-tendencias-container',
  templateUrl: './tendencias-container.component.html',
  styleUrls: ['./tendencias-container.component.scss']
})
export class TendenciasContainerComponent {
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
