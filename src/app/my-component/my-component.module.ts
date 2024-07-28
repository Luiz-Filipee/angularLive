import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { MyComponentComponent } from './my-component.component';
import { ProductsServiceService } from '../services/products-service.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
//import { MyComponentRoutingModule } from './my-component-route';

@NgModule({
  declarations: [
    MyComponentComponent
  ],
  imports: [
    BrowserModule,
    //MyComponentRoutingModule
    HttpClientModule,
    CommonModule
  ],
  providers: [
    provideClientHydration(),
    ProductsServiceService
  ],
  exports: [
    MyComponentComponent
  ]
})
export class MyComponentModule { }
