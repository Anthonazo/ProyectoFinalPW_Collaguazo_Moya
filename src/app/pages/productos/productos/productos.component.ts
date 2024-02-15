import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { CategoriasService } from 'src/app/services/categorias.service';
import { ProductoService } from 'src/app/services/producto.service';
import { Categoria } from '../../../models/categoria';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  productos: Producto[] = [];
  categorias?: Categoria;
  producto?: Producto;
  titulo: string = "";
  codigo: number = 0;

  constructor(private _productosService: ProductoService, private _route: ActivatedRoute, private _categoriaService: CategoriasService) {

  }

  ngOnInit(): void {
    const identificador = parseInt(this._route.snapshot.paramMap.get('identificador') || '0');
    if (identificador) {
      this._categoriaService.getCategoriaPorId(identificador).subscribe(
        (data) => {
          this.categorias = data;
          if (this.categorias && this.categorias.productosList && this.categorias.nombre && this.categorias.codigo) {
            this.productos = this.categorias.productosList
            this.titulo = this.categorias.nombre
            this.codigo = this.categorias.codigo;
            console.log(this.codigo)
          }
        },
        (error) => {
          console.error('Error al obtener la categoria:', error);
        });
    } else {
      this._productosService.getProductos().subscribe(
        (data) => {
          this.productos = data;
          this.titulo = "Todos los productos"
        },
        (error) => {
          console.error('Error al obtener los productos:', error);
        })
    }



  }
}
