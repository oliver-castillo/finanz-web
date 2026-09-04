import { Routes } from '@angular/router';
import {Auth} from './components/auth/auth';
import { Dashboard } from './components/dashboard/dashboard';

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
    path: 'dashboard',
    component: Dashboard,
  }
];
