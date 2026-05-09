import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { LoginComponent } from './pages/login/login';
import { DashboardComponent } from './pages/dashboard/dashboard';
import { TransfersComponent } from './pages/transfers/transfers';
import { PaymentsComponent } from './pages/payments/payments';
export const routes: Routes = [

    {
        path: '',
        component: LoginComponent
    },

    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [authGuard]
    },
    {
        path: 'transfers',
        component: TransfersComponent,
        canActivate: [authGuard]
    },
    {
        path: 'payments',
        component: PaymentsComponent,
        canActivate: [authGuard]
    }

];