import { Component } from '@angular/core';
import { Ingreso } from 'src/app/models/Ingreso';
import { CarritoService } from 'src/app/services/carrito.service';
import { IngresoService } from 'src/app/services/ingreso.service';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.scss']
})
export class IngresoComponent {

  ingreso: Ingreso = new Ingreso();

  public constructor(private ingresoService: IngresoService,  private _carritoService: CarritoService) { }

  public ingresarUsuario(){
    this.ingresoService.ingresarUsuario(this.ingreso).subscribe((data: any) => {
      console.log(data);
      if(data.inicioExitoso){
        localStorage.setItem('cliente', JSON.stringify(data));
        this._carritoService.getCarritoPorCliente(data.cliente.codigo).subscribe(
          (data) => {
            localStorage.setItem('carrito', JSON.stringify(data.codigo));
          },
          (error) => {
            console.error('Error al obtener el carrito: ', error);
          });
      }
    });
    this.ingreso = new Ingreso();
  }




}
