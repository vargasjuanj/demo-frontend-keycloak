import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private productoService:ProductoService) { }
mensajes:string[]
  ngOnInit(): void {
    this.getMensajes()
  }
  getMensajes(){
    this.productoService.getMensajes().subscribe(data=>{
      console.log(data)
      this.mensajes=data
    }, err=>console.log(err))
  }
}
