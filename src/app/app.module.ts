import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Importa o service 

import { ProductService } from 'src/service/product.service';
import { TestandoService } from 'src/service/testando.service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProductService, TestandoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
