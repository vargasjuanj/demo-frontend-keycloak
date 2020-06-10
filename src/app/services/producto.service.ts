import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { KeycloakSecurityService } from './keycloak-security.service';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient, private keycloakSecurityService: KeycloakSecurityService) { }



  getMensajes() {
    return this.http.get<string[]>('http://localhost:8081/api/v1/ecom/mensajes')
  }  
getSaludos() { //Los params lo acepta tanto si está autenticado como si no lo estuviera
  return this.http.get<string[]>('http://localhost:8081/api/v1/ecom/saludo?valor=2')
}
getProductos() {
  return this.http.get<string[]>('http://localhost:8081/api/v1/ecom/productos')
}
getStock() {
  return this.http.get<string[]>('http://localhost:8081/api/v1/ecom/productos/stock')
}
/*
getMensajes() {
  return this.http.get<string[]>('http://localhost:8081/api/v1/ecom/mensajes')
}  
  getSaludos() {
    return this.http.get<string[]>('http://localhost:8081/api/v1/ecom/saludo?valor=1',
    { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + this.keycloakSecurityService.kc.token }) })
  }
  getProductos() {
    return this.http.get<string[]>('http://localhost:8081/api/v1/ecom/productos',
      { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + this.keycloakSecurityService.kc.token }) })
  }
  getStock() {
    return this.http.get<string[]>('http://localhost:8081/api/v1/ecom/productos/stock',
      { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + this.keycloakSecurityService.kc.token }) })
  }
*/


}
