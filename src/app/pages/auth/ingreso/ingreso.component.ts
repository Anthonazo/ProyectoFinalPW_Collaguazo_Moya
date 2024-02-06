import { Component } from '@angular/core';
import { Ingreso } from 'src/app/models/Ingreso';
import { IngresoService } from 'src/app/services/ingreso.service';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.scss']
})
export class IngresoComponent {

  ingreso: Ingreso = new Ingreso();

  public constructor(private ingresoService: IngresoService) { }

  public ingresarUsuario(){
    this.ingresoService.ingresarUsuario(this.ingreso).subscribe((data: any) => {
      console.log(data);
      if(data.inicioExitoso){
        localStorage.setItem('cliente', JSON.stringify(data));
      }
    });
    this.ingreso = new Ingreso();
  }


  

}
