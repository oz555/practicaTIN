import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mensaje = 'Curso de Angular';
  nombre ='Luis';
  nombree ='Pedro';
  getNombre(){
  	return this.nombree;
  }
}
