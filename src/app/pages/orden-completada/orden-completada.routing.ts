import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdenCompletadaComponent } from './orden-completada/orden-completada.component';

const routes: Routes = [
  { path:'', component:  OrdenCompletadaComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdenCompletadaRouting { }
