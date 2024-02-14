import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../../../services/categorias.service';

@Component({
  selector: 'app-categorias-list',
  templateUrl: './categorias-list.component.html',
  styleUrls: ['./categorias-list.component.scss']
})
export class CategoriasListComponent implements OnInit {
  categorias: any[] = [];

  constructor(private _categoriasService: CategoriasService) {}

  ngOnInit() {
    this._categoriasService.getCategotiasBackend().subscribe((result: any[]) => {
      this.categorias = result;
    });
  }
}
