import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ListarUsuariosComponent } from './components/listar-usuarios/listar-usuarios.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
   constructor(public router: Router) {}

  get isLoginPage(): boolean {
    return this.router.url.startsWith('/inicio-sesion');
  }
}
