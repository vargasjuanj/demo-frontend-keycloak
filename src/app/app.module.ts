import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KeycloakSecurityService } from './services/keycloak-security.service';
import { StockComponent } from './components/stock/stock.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { TokenInterceptor } from './services/token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    StockComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {provide: APP_INITIALIZER, deps: [KeycloakSecurityService], useFactory: keycloakFactory,  multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


export function keycloakFactory(KeycloakSecurityService: KeycloakSecurityService) {
  return () => KeycloakSecurityService.init();
}