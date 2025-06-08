import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NgIf } from '@angular/common';
import { ListarEventosComponent } from './components/listar-eventos/listar-eventos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, NgIf, ListarEventosComponent], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public router: Router) {}

  get isLoginPage(): boolean {
    return this.router.url.startsWith('/inicio-sesion');
  }
}