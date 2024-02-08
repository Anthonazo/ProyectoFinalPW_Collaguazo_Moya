import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoCardComponent } from './components/producto-card/producto-card.component';
import { CarritoCardComponent } from './components/carrito-card/carrito-card.component';



@NgModule({
  declarations: [
    ProductoCardComponent,
    CarritoCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ProductoCardComponent]
})
export class SharedModule { }
