import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngresoComponent } from './pages/registo/ingreso/ingreso.component';
import { AgradecimientoComponent } from './pages/registo/agradecimiento/agradecimiento.component';
import { RegistoComponent } from './pages/registo/registo/registo.component';

const routes: Routes = [
  {path: '', component: IngresoComponent},
  {path: 'agradecimiento', component: AgradecimientoComponent},
  {path: 'registro', component: RegistoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
