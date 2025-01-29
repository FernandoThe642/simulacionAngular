import { Routes } from '@angular/router';
import { UsuarioComponent } from './components/usuario/usuario.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'components/usuario',
        pathMatch: 'full' //Coincidir ruta vacia
    },
    {
        path: 'components/usuario',
        component: UsuarioComponent
    }
];
