import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoDeHeroesComponent } from './listado-de-heroes/listado-de-heroes.component';
import { FormsModule } from '@angular/forms';
import { HeroProfileComponent } from './hero-profile/hero-profile.component';
import { ModalPollComponent } from './modal-poll/modal-poll.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    ListadoDeHeroesComponent,
    HeroProfileComponent,
    ModalPollComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})

export class AppModule { }
