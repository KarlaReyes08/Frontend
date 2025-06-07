import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  imports: [],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
   titulo: string = 'Bienvenidos a Eventos Conexión';
  subtitulo: string = 'Explorá conferencias, conciertos y más eventos increíbles.';

  constructor () {

  }
   mostrarAlerta() {
    alert('Gracias por visitar la app.');
  }
}
