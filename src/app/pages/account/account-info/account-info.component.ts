import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/Cliente';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.scss']
})
export class AccountInfoComponent implements OnInit {

  string = '';

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.verificarInformacionLocalStorage();
  }

  verificarInformacionLocalStorage() {
    const informacion = localStorage.getItem('cliente');
    if(informacion){
      let informacionCliente: any = JSON.parse(informacion);
      this.string = informacionCliente.cliente.primerNombre;
    }
  }

  public cerrarSesion(){
    localStorage.removeItem('cliente');
    this.router.navigate(['/home']);
  }

}
