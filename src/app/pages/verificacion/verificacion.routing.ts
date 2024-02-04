import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerificacionComponent } from './verificacion/verificacion.component';

const routes: Routes = [
  { path:'', component:  VerificacionComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VerificacionRouting { }
