import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/Environments/environmets';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  public ingresarCliente(cliente: any){
    let url = environment.WS_PATH + 'clientes'
    return this.http.post(url, cliente);
  }

  public getClienteEmail(email: string){
    let url = environment.WS_PATH + 'clientes/email/' + email;
    return this.http.get(url);
  }

  public actualizarCliente(cliente: any){
    let url = environment.WS_PATH + 'clientes'
    return this.http.put(url, cliente);
  }
}
