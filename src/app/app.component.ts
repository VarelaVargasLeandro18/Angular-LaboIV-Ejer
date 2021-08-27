import { Component } from '@angular/core';
import { NumericLiteral } from 'typescript';
import { Usuario } from './clases/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /* 
  Clase 1:
  title = 'PrimerClase';
  usuario:Usuario;

  constructor () {
    this.usuario = new Usuario();
  }

  saludar() {
    console.log("HOLA");
  } */

  public edadUno : number;
  public edadDos : number;
  public promedio : number;
  public suma : number;

  constructor () {
    this.edadUno = 0;
    this.edadDos = 0;
    this.promedio = 0;
    this.suma = 0;
  }

  onClickLimpiar() {
    this.limpiarCuadrosDeTexto();
  }

  onClickCalcular() {
    this.calcularPromedio();
    this.calcularSuma();
  }

  private limpiarCuadrosDeTexto() {
    this.edadUno = 0;
    this.edadDos = 0;
    this.promedio = 0;
    this.suma = 0;
  }

  private calcularPromedio() {
    this.promedio = this.edadUno + this.edadDos;
    this.promedio /= 2;
  }

  private calcularSuma() {
    this.suma = this.edadUno + this.edadDos;
  }

}