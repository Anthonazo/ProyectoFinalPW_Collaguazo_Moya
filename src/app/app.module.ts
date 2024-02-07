import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './pages/auth/registro/registo.component';
import { RecuperarCuentaComponent } from './pages/auth/recuperar-cuenta/recuperar-cuenta.component';
import { IngresoComponent } from './pages/auth/ingreso/ingreso.component';
import { AgradecimientoComponent } from './pages/auth/agradecimiento/agradecimiento.component';
import { SkeletonComponent } from './layouts/skeleton/skeleton.component';
import { NavComponent } from './layouts/nav/nav.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { SharedModule } from './shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SkeletonComponent,
    NavComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
