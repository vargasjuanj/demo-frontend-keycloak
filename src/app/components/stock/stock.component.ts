import { Component, OnInit } from '@angular/core';
import { KeycloakSecurityService } from 'src/app/services/keycloak-security.service';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  constructor(private keycloakSecurityService: KeycloakSecurityService, private productoService:ProductoService) { }

  stock:string[]

  ngOnInit(): void {
    this.getStock()
  }
  getStock(){
    this.productoService.getStock().subscribe(data=>{
      console.log(data)
      this.stock=data
    }, err=>console.log(err))
  }
}
