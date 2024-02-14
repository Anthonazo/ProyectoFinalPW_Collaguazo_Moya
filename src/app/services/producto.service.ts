import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/Environments/environmets';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  productos: any[] = [
    {
      categoria: "Celulares y Tablets",
      img: "/assets/img/productos/iphone.png",
      nombre: "Iphone 15 pro max color blanco con 512GB de almacenamiento",
      precio: "102.00",
      descuento: "70%"
    },
    {
      categoria: "Celulares y Tablets",
      img: "/assets/img/productos/iphone.png",
      nombre: "Iphone 15 pro max color blanco con 512GB de almacenamiento",
      precio: "102.00",
      descuento: "70%"
    },
    {
      categoria: "Celulares y Tablets",
      img: "/assets/img/productos/iphone.png",
      nombre: "Iphone 15 pro max color blanco con 512GB de almacenamiento",
      precio: "102.00",
      descuento: "70%"
    },
    {
      categoria: "Celulares y Tablets",
      img: "/assets/img/productos/iphone.png",
      nombre: "Iphone 15 pro max color blanco con 512GB de almacenamiento",
      precio: "102.00",
      descuento: "70%"
    },
    {
      categoria: "Celulares y Tablets",
      img: "/assets/img/productos/iphone.png",
      nombre: "Iphone 15 pro max color blanco con 512GB de almacenamiento",
      precio: "102.00",
      descuento: "70%"
    },
    {
      categoria: "Celulares y Tablets",
      img: "/assets/img/productos/iphone.png",
      nombre: "Iphone 15 pro max color blanco con 512GB de almacenamiento",
      precio: "102.00",
      descuento: "70%"
    },
    {
      categoria: "Celulares y Tablets",
      img: "/assets/img/productos/iphone.png",
      nombre: "Iphone 15 pro max color blanco con 512GB de almacenamiento",
      precio: "102.00",
      descuento: "70%"
    },
    {
      categoria: "Celulares y Tablets",
      img: "/assets/img/productos/iphone.png",
      nombre: "Iphone 15 pro max color blanco con 512GB de almacenamiento",
      precio: "102.00",
      descuento: "70%"
    },
    {
      categoria: "Celulares y Tablets",
      img: "/assets/img/productos/iphone.png",
      nombre: "Iphone 15 pro max color blanco con 512GB de almacenamiento",
      precio: "102.00",
      descuento: "70%"
    },
  ]

  constructor(private http: HttpClient) { }

  getProductos() {
    return this.productos
  }

  getProductosBackend() {
    let url = environment.WS_PATH + 'productos/list'; 
    return this.http.get<any>(url);
  }
}
