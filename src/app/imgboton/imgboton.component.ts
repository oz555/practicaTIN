import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'imgboton',
  template: `
  <img src = "{{ imagenURL }}"/> de forma normal
  <img [src] = "imagenURL"/><br/>
  <button disabled>Mi Boton </button><br/>
  <button [disabled]="botonStatus">Mi Boton Dos</button>
  <button [class.activo] = "isActive">Mi Boton Tres</button>
  `,
  styles: [`
  .activo{
  	background: green;
  }
  `]
})
export class ImgbotonComponent implements OnInit {

	imagenURL ="http://lorempixel.com/400/200";
	botonStatus =false;
	isActive =true;

  constructor() { }

  ngOnInit(): void {
  }

}
