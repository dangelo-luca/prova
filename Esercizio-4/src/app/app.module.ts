import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LazzaComponent } from './lazza/lazza.component';
import { NavigazioneComponent } from './navigazione/navigazione.component';

@NgModule({
  declarations: [
    AppComponent,
    LazzaComponent,
    NavigazioneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
