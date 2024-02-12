import { Component, OnInit, ViewChild } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit{

  constructor(private sidebarService: SidebarService) { }

  // Método para abrir el sidebar
  openSidebar() {
    this.sidebarService.open();
  }

  ngOnInit(): void {
    this.verificarInformacionLocalStorage();
  }

  verificarInformacionLocalStorage(): boolean {
    const informacion = localStorage.getItem('cliente');
    return informacion !== null;
  }


}
