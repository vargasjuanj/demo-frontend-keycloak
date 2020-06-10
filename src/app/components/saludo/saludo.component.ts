import { Component, OnInit } from '@angular/core';
import { KeycloakSecurityService } from 'src/app/services/keycloak-security.service';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {


  constructor(private keycloakSecurityService:KeycloakSecurityService, private productoService:ProductoService) { }

  saludo:string[]

  ngOnInit(): void {
    this.getSaludos()
  }
getSaludos(){
  this.productoService.getSaludos().subscribe(data=>{
    console.log(data)
    this.saludo=data
  }, err=>console.log(err))
}

}
