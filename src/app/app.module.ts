import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './pages/registro/registro/registo.component';
import { RecuperarCuentaComponent } from './pages/registro/recuperar-cuenta/recuperar-cuenta.component';
import { IngresoComponent } from './pages/registro/ingreso/ingreso.component';
import { AgradecimientoComponent } from './pages/registro/agradecimiento/agradecimiento.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    RecuperarCuentaComponent,
    IngresoComponent,
    AgradecimientoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
