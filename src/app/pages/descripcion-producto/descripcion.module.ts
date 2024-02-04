import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescripcionRouting } from './descripcion.routing';
import { DescripcionComponent } from './descripcion/descripcion.component';



@NgModule({
  declarations: [
  
    DescripcionComponent
  ],
  imports: [
    CommonModule,
    DescripcionRouting
  ]
})
export class DescripcionModule { }
