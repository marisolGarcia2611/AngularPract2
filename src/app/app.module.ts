import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeroesComponent } from './Componentes/heroes/heroes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [HeroesComponent]
})
export class AppModule { }
