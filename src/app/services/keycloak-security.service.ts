import { Injectable } from '@angular/core';
import { KeycloakInstance } from 'keycloak-js'; 
declare var Keycloak:any; // Este variable es necesaria para rellenarla con datos de la configuración del adaptador, es usado por la instancia de keycloak (kc)

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
        url: 'http://localhost:8080/auth', //Todos estos datos deben existir en el servidor de keycloak, estos datos se sacan de la solapa instalación de cada cliente, formato json.
        realm: 'E-Commerce',
        clientId: 'frontend'
      });
      this.kc.init({
         //onLoad: 'login-required'  
        onLoad: 'check-sso' 
  
        // promiseType: 'native'

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




//Se deben especificar bien las redirecciones y ewb origen ya ue es dificil proteger las credenciales de los clientes, hay que especificar bien las redirecciones para que no hayan bug. Es decir que si yo pongo que redireccione a cualquier lado, al hacerlo pueden interceptar mi token, algun otro servidory hacer ciertas cosas.
// Es pública para poder usar está instancia en toda la aplicación angular. Esta se comunica con el servidor de keycloak
// Esta es la promesa que se lanza en el APP_INITIALIZER del appm.module.ts, si se resuelve inicia la aplicación de angular.
//Obliga a loguearse, aunque sea una vez para poder entrar a cualquier parte de la aplicación, sea un path publico o no
      // Si el usuario esta logueado a una app que pertenece al reino, se logue automaticamente
      // Se accede sin loguearse a las partes publicas de la aplicación