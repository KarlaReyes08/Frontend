import { Routes } from '@angular/router';

import { InicioComponent } from './components/inicio/inicio.component';
import { ListarUsuariosComponent } from './components/listar-usuarios/listar-usuarios.component';
import { EditarUsuariosComponent } from './components/editar-agregar-usuarios/editar-usuarios.component';

export const routes: Routes = [];
[
{path: 'inicio', component: InicioComponent},
{path: 'listar', component: ListarUsuariosComponent},
{path: 'editar', component: EditarUsuariosComponent}
]
