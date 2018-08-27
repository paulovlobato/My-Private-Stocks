// Plugins
import { Routes, RouterModule } from '@angular/router'

// Paginas e componentes
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ManageComponent } from './components/manage/manage.component';

/**
 * Arquivo de configuração de rotas
 */

// Array de objetos
const routes: Routes = [
{
    // Sem rota. Index do app
    path: '',
    component: DashboardComponent
},
{
    path: 'manage',
    component: ManageComponent
}
];

export const AppRoutes = RouterModule.forRoot(routes);
