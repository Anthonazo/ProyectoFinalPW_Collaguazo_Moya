
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkeletonComponent } from './layouts/skeleton/skeleton.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
    import('./pages/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '',
    component: SkeletonComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./pages/main/main.module').then((m) => m.MainModule),
      },
      {
        path: 'carrito',
        loadChildren: () =>
          import('./pages/carrito/carrito.module').then((m) => m.CarritoModule),
      },
      {
        path: 'verificacion',
        loadChildren: () =>
          import('./pages/verificacion/verificacion.module').then((m) => m.VerificacionModule),
      },
      {
        path: 'completada',
        loadChildren: () =>
          import('./pages/orden-completada/orden-completada.module').then((m) => m.OrdenCompletadaModule),
      },
      {
        path: 'descripcion',
        loadChildren: () =>
          import('./pages/descripcion-producto/descripcion.module').then((m) => m.DescripcionModule),
      },
      { path: '**', redirectTo: '/home', pathMatch: 'full' },
    ],
  },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
