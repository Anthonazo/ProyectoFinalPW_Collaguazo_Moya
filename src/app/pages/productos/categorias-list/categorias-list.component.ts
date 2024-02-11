import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../../../services/categorias.service';

@Component({
  selector: 'app-categorias-list',
  templateUrl: './categorias-list.component.html',
  styleUrls: ['./categorias-list.component.scss']
})
export class CategoriasListComponent{
  categorias: any[] = []

  constructor(private _categoriasService: CategoriasService) {
    this.categorias = _categoriasService.getCategorias();
  }
}
