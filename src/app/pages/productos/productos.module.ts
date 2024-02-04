import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosRouting } from './productos.routing';
import { ProductosComponent } from './productos/productos.component';
import { CategoriasListComponent } from './categorias-list/categorias-list.component';


@NgModule({
  declarations: [
    ProductosComponent,
    CategoriasListComponent
  ],
  imports: [
    CommonModule,
    ProductosRouting
  ]
})
export class ProductosModule { }
