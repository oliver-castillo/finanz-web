import {CanActivateChildFn, Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {inject} from '@angular/core';

export const authGuard: CanActivateChildFn = (route, state) => {
  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);
  if (!authService.isAuthenticated()) {
    router.navigate(['/auth']).finally(() => {
    });
    return false;
  }
  return true;
};
