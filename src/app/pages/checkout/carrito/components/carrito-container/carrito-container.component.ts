import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { Carrito } from '../../../../../models/carrito';
import { DetallesCarrito } from '../../../../../models/detallesCarrito';
import { ProductoService } from 'src/app/services/producto.service';
import { CarritoService } from 'src/app/services/carrito.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { Cliente } from 'src/app/models/Cliente';

@Component({
  selector: 'app-carrito-container',
  templateUrl: './carrito-container.component.html',
  styleUrls: ['./carrito-container.component.scss']
})
export class CarritoContainerComponent {
  carrito: any;
  subTotal: number = 0;
  detalleCarrito: DetallesCarrito = new DetallesCarrito();

  constructor(private _productoService: ProductoService, private _carritoService: CarritoService, private _clienteService: ClienteService) {

  }

  ngOnInit(): void {
    const cliente = this._clienteService.getClienteLocalStorage();
    console.log(cliente);
    this._carritoService.getCarritoPorCliente(cliente.cliente.codigo).subscribe(
      (data) => {
        this.carrito = data;
        console.log(data)
      },
      (error) => {
        console.error('Error al obtener los productos:', error);
      });;
  }
  onPrecioTotalChange(precioTotal: number): void {
    console.log('Precio total actualizado:', precioTotal);
    this.subTotal = this.subTotal + precioTotal;
    // Puedes realizar cualquier acción adicional aquí, como actualizar un componente de resumen de carrito.
  }
  }

