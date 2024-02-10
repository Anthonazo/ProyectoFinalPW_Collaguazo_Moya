import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  categorias: any[] = [
    {
      img: "/assets/img/categorias/xbox-logo.png",
      nombre: "Video-juegos"
    },
    {
      img: "/assets/img/categorias/xbox-logo.png",
      nombre: "Video-juegos"
    },
    {
      img: "/assets/img/categorias/xbox-logo.png",
      nombre: "Video-juegos"
    },
    {
      img: "/assets/img/categorias/xbox-logo.png",
      nombre: "Video-juegos"
    },
    {
      img: "/assets/img/categorias/xbox-logo.png",
      nombre: "Video-juegos"
    },
    {
      img: "/assets/img/categorias/xbox-logo.png",
      nombre: "Video-juegos"
    },
    {
      img: "/assets/img/categorias/xbox-logo.png",
      nombre: "Video-juegos"
    },
    {
      img: "/assets/img/categorias/xbox-logo.png",
      nombre: "Video-juegos"
    },
    {
      img: "/assets/img/categorias/xbox-logo.png",
      nombre: "Video-juegos"
    },
  ]

  constructor() { }

  getCategorias() {
    return this.categorias
  }
}
