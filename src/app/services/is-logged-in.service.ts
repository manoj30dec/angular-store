import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class IsLoggedInService {
  isBrowser = isPlatformBrowser(PLATFORM_ID)
  constructor(private router:Router,  @Inject(PLATFORM_ID) platformId: Object) { 
    this.isBrowser = isPlatformBrowser(platformId);
  }
  isLoggedIn(){
    if(this.isBrowser){
      const auth_token = localStorage.getItem('as_token');
      if(auth_token){
        return true
      }
    }
    return false;
  }
  logout(){
    if(this.isBrowser){
      localStorage.removeItem('as_token')
      this.router.navigate(['/login'])
    }
  }
  
}
