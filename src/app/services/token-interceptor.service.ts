import { Injectable } from '@angular/core';
import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

import {  of } from 'rxjs';
import { take, exhaustMap } from 'rxjs/operators';
import { KeycloakSecurityService } from './keycloak-security.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private keycloakSecurityService: KeycloakSecurityService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log('request interceptor ...')
    return of(this.keycloakSecurityService.kc)
      .pipe(
        take(1),
        exhaustMap(keycloak => {
          // console.log('keycloak', keycloak)
          if (!keycloak.authenticated) {
            return next.handle(req);
          }
          const modifiedReq = req.clone(
            {
              setHeaders: {
                'Authorization': 'Bearer ' + keycloak.token
              }
            }
          );
          return next.handle(modifiedReq);
        })
      );
  }
}