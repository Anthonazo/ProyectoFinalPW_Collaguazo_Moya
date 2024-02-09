import { Injectable } from '@angular/core';

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

  constructor() { }

  getProductos() {
    return this.productos
  }
}
