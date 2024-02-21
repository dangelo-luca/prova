import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigazioneComponent } from './navigazione/navigazione.component';
import { LazzaComponent } from './lazza/lazza.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Esercizio-4';
}
