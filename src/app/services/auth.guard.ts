import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { IsLoggedInService } from './is-logged-in.service';
export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const isLoggedIn = inject(IsLoggedInService);
  if(isLoggedIn.isLoggedIn()==false){
    router.navigateByUrl('/');
    return false;
  }
  return true;
};
