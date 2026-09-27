import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { KeycloakSecurityService } from '../services/keycloak-security.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private keycloakSecurityService:KeycloakSecurityService){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if (!this.keycloakSecurityService.kc.authenticated) {
      console.log('No estás logueado');
     this.keycloakSecurityService.kc.login()
      return false;
  }

  return true;
  }
}
