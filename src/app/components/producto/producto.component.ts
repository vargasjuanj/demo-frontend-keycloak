import { Component, OnInit } from '@angular/core';
import { KeycloakSecurityService } from 'src/app/services/keycloak-security.service';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  constructor(private keycloakSecurityService:KeycloakSecurityService, private productoService:ProductoService) { }

  productos:string[]


  ngOnInit(): void {
    this.getProductos()
  }
  getProductos(){
    this.productoService.getProductos().subscribe(data=>{
      console.log(data)
      this.productos=data
    }, err=>console.log(err))
  }
}
