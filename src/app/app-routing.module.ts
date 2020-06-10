import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SaludoComponent } from './components/saludo/saludo.component';
import { StockComponent } from './components/stock/stock.component';
import { ProductoComponent } from './components/producto/producto.component';
import { HomeComponent } from './components/home/home.component';
import { AdminGuard } from './guards/admin.guard';
import { AuthGuard } from './guards/auth.guard';
import { AppComponent } from './app.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'saludo', component:SaludoComponent},
  {path:'productos', component:ProductoComponent, canActivate:[AuthGuard]},
  {path:'stock',component:StockComponent, canActivate:[AdminGuard]},
  {path: '**',component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
