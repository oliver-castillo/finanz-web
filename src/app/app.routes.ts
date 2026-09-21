import { Routes } from '@angular/router';
import {Auth} from './features/auth/auth';
import { MainLayout } from './layout/main-layout/main-layout.component';
import { Dashboard } from './features/dashboard/dashboard';

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
    children: [
      {
        path: 'dashboard',
        component: Dashboard,
      },
    ]
  }
];
