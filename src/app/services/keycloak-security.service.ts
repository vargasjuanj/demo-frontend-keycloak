import { Injectable } from '@angular/core';
import { KeycloakInstance } from 'keycloak-js';
declare var Keycloak:any;

@Injectable({
  providedIn: 'root'
})

export class KeycloakSecurityService {

  public kc: KeycloakInstance;
  constructor() { }

  init() {
    return new Promise((resolve, reject) => {
      console.log('INIT : Service keycloak security ');
      this.kc = new Keycloak({
        url: 'http://localhost:8080/auth',
        realm: 'E-Commerce',
        clientId: 'frontend'
      });
      this.kc.init({

        onLoad: 'check-sso'

      }).then((authenticated) => {
         console.log('authenticated', authenticated);
         console.log('token: ', this.kc.token);
        resolve({ authenticated, token: this.kc.token })
      }).catch(err => {
        reject(err);
      });
    });
  }
}

