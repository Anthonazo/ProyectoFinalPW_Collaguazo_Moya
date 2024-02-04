import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarritoContainerComponent } from './carrito-container/carrito-container.component';
import { TotalPrecioComponent } from './total-precio/total-precio.component';
import { CarritoComponent } from './carrito/carrito.component';
import { CarritoRouting } from './carrito.routing';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    CarritoContainerComponent,
    TotalPrecioComponent,
    CarritoComponent,
  ],
  imports: [
    CommonModule,
    CarritoRouting,
  ]
})
export class CarritoModule { }
