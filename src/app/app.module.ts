import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistoComponent } from './pages/registo/registo/registo.component';
import { RecuperarCuentaComponent } from './pages/registo/recuperar-cuenta/recuperar-cuenta.component';
import { IngresoComponent } from './pages/registo/ingreso/ingreso.component';
import { AgradecimientoComponent } from './pages/registo/agradecimiento/agradecimiento.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistoComponent,
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
