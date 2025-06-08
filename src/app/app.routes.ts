import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { ListarEventosComponent } from './components/listar-eventos/listar-eventos.component';

export const routes: Routes = [
 {path: '', redirectTo: '/inicio', pathMatch: 'full'},
 {path: 'inicio', component:DashboardComponent}, 
 {path: 'inicio-sesion', component:LoginComponent},
 {path: 'registro', component:RegistroComponent},
 {path: 'eventos', component:ListarEventosComponent}
];
