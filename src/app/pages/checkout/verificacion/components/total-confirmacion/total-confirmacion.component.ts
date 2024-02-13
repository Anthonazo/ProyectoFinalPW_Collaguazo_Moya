import { Component, EventEmitter, Output } from '@angular/core';
import { TotalPrecioService } from 'src/app/services/total-precio.service';

@Component({
  selector: 'app-total-confirmacion',
  templateUrl: './total-confirmacion.component.html',
  styleUrls: ['./total-confirmacion.component.scss']
})
export class TotalConfirmacionComponent {
  precioTotal: number = 0;
  @Output() botonPresionado = new EventEmitter<void>();
  direccionConfirmada = false;
  aceptaPromociones = false;

  // Llama a este método cuando se presione el botón

  constructor(private _totalPrecioService: TotalPrecioService) {}

  ngOnInit(): void {
    const subtotal = localStorage.getItem('subtotal');
    if (subtotal) {
      const objeto: any = JSON.parse(subtotal);

      this.precioTotal =  objeto;
      console.log(objeto);
    } else {
      console.log('El objeto no existe en el localStorage.');
    }
  }

  onButtonPress(): void {
    if (this.direccionConfirmada && this.aceptaPromociones) {
      alert("Gracias por su honestidad y aceptar las promociones");
      this.botonPresionado.emit();
    } else if (this.direccionConfirmada) {
      alert("Gracias por su honestidad");
      this.botonPresionado.emit();
    } else {
      alert("Debe confirmar que la informacion es totalmente verdadera");
    }
  }
}
