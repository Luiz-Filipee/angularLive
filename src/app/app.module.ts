import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentModule } from './my-component/my-component.module';
import { CrudComponentComponent } from './components/crud-component/crud-component.component';

@NgModule({
  declarations: [
    AppComponent,
    //CrudComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyComponentModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
