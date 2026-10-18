import {Routes} from '@angular/router';
import {Auth} from './features/auth/auth';
import {MainLayout} from './layout/main-layout/main-layout.component';
import {Dashboard} from './features/dashboard/dashboard';
import {Accounts} from './features/accounts/accounts';
import {authGuard} from './core.guards/auth-guard';

export const routes: Routes = [
  {
    path: 'auth',
    component: Auth,
  },
  {
    path: '',
    component: Auth,
  },
  {
    path: '',
    component: MainLayout,
    canActivateChild: [authGuard],
    children: [
      {
        path: 'dashboard',
        component: Dashboard,
      },
      {
        path: 'accounts',
        component: Accounts,
      },
    ],
  },
];
