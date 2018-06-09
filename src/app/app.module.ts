import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { NotizieComponentComponent } from './notizie-component/notizie-component.component';
import { TreniComponent } from './treni/treni.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NotizieComponentComponent,
    TreniComponent
  ], //array di componenti usati nell'app 
  imports: [
    BrowserModule
  ], //direttive da caricare
  providers: [],
  bootstrap: [AppComponent] //nome della componente che dovrà essere caricata per prima
})
export class AppModule {

  
 }
