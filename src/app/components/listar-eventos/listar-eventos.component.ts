import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Evento {
  nombre: string;
  descripcion: string;
  imagen: string;
}

@Component({
  selector: 'app-listar-eventos',
  imports: [RouterLink, CommonModule, NgClass],
  templateUrl: './listar-eventos.component.html',
  styleUrl: './listar-eventos.component.css'
})
export class ListarEventosComponent {
eventos: Evento[] = [
    { nombre: 'Evento 1', descripcion: 'Descripción del evento 1. Lugar, fecha y hora.', imagen: 'https://placehold.co/120x80' },
    { nombre: 'Evento 2', descripcion: 'Descripción del evento 2. Lugar, fecha y hora.', imagen: 'https://placehold.co/120x80' },
    { nombre: 'Evento 3', descripcion: 'Descripción del evento 3. Lugar, fecha y hora.', imagen: 'https://placehold.co/120x80' },
    { nombre: 'Evento 4', descripcion: 'Descripción del evento 4. Lugar, fecha y hora.', imagen: 'https://placehold.co/120x80' },
    { nombre: 'Evento 5', descripcion: 'Descripción del evento 5. Lugar, fecha y hora.', imagen: 'https://placehold.co/120x80' },
    { nombre: 'Evento 6', descripcion: 'Descripción del evento 6. Lugar, fecha y hora.', imagen: 'https://placehold.co/120x80' },
    { nombre: 'Evento 7', descripcion: 'Descripción del evento 7. Lugar, fecha y hora.', imagen: 'https://placehold.co/120x80' },
    { nombre: 'Evento 8', descripcion: 'Descripción del evento 8. Lugar, fecha y hora.', imagen: 'https://placehold.co/120x80' },
    { nombre: 'Evento 9', descripcion: 'Descripción del evento 9. Lugar, fecha y hora.', imagen: 'https://placehold.co/120x80' },
    // ...agrega más eventos si quieres
  ];

  eventosPorPagina = 4;
  paginaActual = 1;

  get paginas(): number[] {
  return Array(this.totalPaginas).fill(0).map((_, i) => i + 1);
}

  get totalPaginas(): number {
    return Math.ceil(this.eventos.length / this.eventosPorPagina);
  }

  get eventosPagina(): Evento[] {
    const inicio = (this.paginaActual - 1) * this.eventosPorPagina;
    return this.eventos.slice(inicio, inicio + this.eventosPorPagina);
  }

  cambiarPagina(pagina: number) {
    if (pagina >= 1 && pagina <= this.totalPaginas) {
      this.paginaActual = pagina;
    }
  }
}

