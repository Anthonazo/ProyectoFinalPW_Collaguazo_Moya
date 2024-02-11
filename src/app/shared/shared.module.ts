import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoCardComponent } from './components/producto-card/producto-card.component';
import { CarritoCardComponent } from './components/carrito-card/carrito-card.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProductoCardComponent,
    CarritoCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ProductoCardComponent,
    CarritoCardComponent
  ]
})
export class SharedModule { }
