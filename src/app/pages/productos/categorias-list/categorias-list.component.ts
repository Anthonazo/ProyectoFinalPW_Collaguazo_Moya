import { Component, Input, OnInit } from '@angular/core';
import { CategoriasService } from '../../../services/categorias.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categorias-list',
  templateUrl: './categorias-list.component.html',
  styleUrls: ['./categorias-list.component.scss']
})
export class CategoriasListComponent implements OnInit {
  categorias: any[] = [];

  codigo?: number;

  constructor(private _categoriasService: CategoriasService, private _route: ActivatedRoute) {}

  ngOnInit() {
    this.codigo = parseInt(this._route.snapshot.paramMap.get('identificador') || '0');
    this._categoriasService.getCategotiasBackend().subscribe((result: any[]) => {
      this.categorias = result;
      console.log(result)
    });

    console.log("El codigo es" + this.codigo)
  }


}
