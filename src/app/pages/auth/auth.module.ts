import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgradecimientoComponent } from './agradecimiento/agradecimiento.component';
import { IngresoComponent } from './ingreso/ingreso.component';
import { RecuperarCuentaComponent } from './recuperar-cuenta/recuperar-cuenta.component';
import { RegistroComponent } from './registro/registo.component';
import { AuthRouting } from './auth.routing';


@NgModule({
  declarations: [
    AgradecimientoComponent,
    IngresoComponent,
    RecuperarCuentaComponent,
    RegistroComponent,
  ],
  imports: [
    CommonModule,
    AuthRouting,
  ]
})
export class AuthModule { }
