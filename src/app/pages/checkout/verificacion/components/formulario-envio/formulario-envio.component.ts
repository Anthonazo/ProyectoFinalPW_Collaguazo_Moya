import { FacturaService } from './../../../../../services/factura.service';
import { Component, EventEmitter, Input } from '@angular/core';
import { Cliente } from 'src/app/models/Cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import { DireccionService } from 'src/app/services/direccion.service';
import { Direccion } from '../../../../../models/direccion';
import { FormBuilderService } from '../../form-builder.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-envio',
  templateUrl: './formulario-envio.component.html',
  styleUrls: ['./formulario-envio.component.scss']
})
export class FormularioEnvioComponent {

  string = '';
  @Input() botonPresionado?: EventEmitter<void>;
  formulario?: FormGroup;

  cliente: any;
  informacionCliente: any;
  direccion: Direccion = new Direccion();

  clineteAct: Cliente = new Cliente();
  direccionAct: Direccion = new Direccion();

  constructor(private clienteService: ClienteService, private _direccionService: DireccionService, private _formBuilderService: FormBuilderService, private _facturaService: FacturaService) {
  }

  ngOnInit(): void {
    this.verificarInformacionLocalStorage();
    this.obtenerDireccion();

    this.formulario = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      pais: new FormControl('', [Validators.required]),
      principal: new FormControl('', [Validators.required]),
      secundaria: new FormControl('', [Validators.required]),
      ciudad: new FormControl('', [Validators.required]),
      codigoPostal: new FormControl('', [Validators.required]),
      celular: new FormControl('', [Validators.required]),
      correo: new FormControl('', [Validators.required]),
    });

    if (this.botonPresionado) {
      this.botonPresionado.subscribe(() => {
        this.enviarDatos();
      });
    }
  }

  onButtonPress(): void {
    this.enviarDatos();
    console.log(this.cliente.codigo)

  }

  enviarDatos(): void {
    // Crea un objeto con los datos del formulario
    if (this.formulario) {
      if (this.formulario.invalid) {
        alert('La informacion ingresada es incorrecta o incompleta');
        return
      }
      this.clineteAct.codigo = this.cliente.codigo;
      this.clineteAct.primerNombre = this.formulario.get('nombre')?.value;
      this.clineteAct.primerApellido = this.formulario.get('apellido')?.value;
      this.clineteAct.correo = this.formulario.get('correo')?.value;
      this.clineteAct.contrasenia = this.cliente.contrasenia;
      this.clineteAct.celular = this.formulario.get('celular')?.value;

       this.clienteService.actualizarCliente(this.clineteAct).subscribe(data => {

       });

      this.direccionAct.codigo = this.direccion.codigo;
      this.direccionAct.nombrePais = this.formulario.get('pais')?.value;
      //this.direccionAct.nombreProvincia = this.formulario.get('provincia')?.value;
      this.direccionAct.nombreProvincia = "Azuay";
      this.direccionAct.nombreCiudad = this.formulario.get('ciudad')?.value;
      this.direccionAct.codigoPostal = this.formulario.get('codigoPostal')?.value;
      this.direccionAct.direccionPricipal = this.formulario.get('principal')?.value;
      this.direccionAct.direccionSecundaria = this.formulario.get('secundaria')?.value;
      this.direccionAct.cliente = this.clineteAct;

      const dir = this.direccionAct;

       this._direccionService.actualizarDireccion(this.direccionAct).subscribe(data => {

       });

       this._facturaService.generarFactura(this.cliente.codigo).subscribe(data => {
        console.log(data);
      });

      this.clineteAct = new Cliente();
      this.direccionAct = new Direccion();
    }
  }

  public actualizarCliente() {
    this.clienteService.actualizarCliente(this.cliente).subscribe(data => {

      alert('Se actualizo con exito');
      localStorage.setItem('cliente', JSON.stringify(data));
      this.ngOnInit();
    });
  }

  verificarInformacionLocalStorage() {
    const informacion = localStorage.getItem('cliente');
    if (informacion) {
      this.informacionCliente = JSON.parse(informacion);
      this.cliente = this.informacionCliente.cliente;
      this.string = this.informacionCliente.cliente.primerNombre;
    }
  }

  obtenerDireccion() {
    this._direccionService.getDireccionPorCliente(this.cliente.codigo).subscribe(
      (data) => {
        this.direccion = data;

      },
      (error) => {
        console.error('Error al obtener la direccion', error);
      });


  }

  actualizarDatosCliente() {

  }
}
