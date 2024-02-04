import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdenCompletadaRouting} from './orden-completada.routing';
import { TotalComponent } from './total/total.component';
import { OrdenCompletadaComponent } from './orden-completada/orden-completada.component';
import { ProductosContainerComponent } from './productos-container/productos-container.component';




@NgModule({
  declarations: [
    TotalComponent,
    OrdenCompletadaComponent,
    ProductosContainerComponent
  ],
  imports: [
    CommonModule,
    OrdenCompletadaRouting
  ]
})
export class OrdenCompletadaModule { }
