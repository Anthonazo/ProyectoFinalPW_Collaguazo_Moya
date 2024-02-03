import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './registro/registo.component';
import { IngresoComponent } from './ingreso/ingreso.component';
import { AgradecimientoComponent } from './agradecimiento/agradecimiento.component';
import { RecuperarCuentaComponent } from './recuperar-cuenta/recuperar-cuenta.component';

const routes: Routes = [
  { path: '', component: RegistroComponent },
  { path: 'ingreso', component: IngresoComponent},
  { path: 'agradecimiento', component: AgradecimientoComponent},
  { path: 'recuperar-cuenta', component: RecuperarCuentaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistoRoutingModule { }
