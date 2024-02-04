import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerificacionRouting } from './verificacion.routing';
import { TotalConfirmacionComponent } from './total-confirmacion/total-confirmacion.component';
import { FormularioEnvioComponent } from './formulario-envio/formulario-envio.component';
import { VerificacionComponent } from './verificacion/verificacion.component';



@NgModule({
  declarations: [
    TotalConfirmacionComponent,
    FormularioEnvioComponent,
    VerificacionComponent
  ],
  imports: [
    CommonModule,
    VerificacionRouting
  ]
})
export class VerificacionModule { }
