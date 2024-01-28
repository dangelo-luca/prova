import { Component } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@Component({
  selector: 'primo-componente',
  standalone: true,
  imports: [MatProgressBarModule],
  templateUrl: './primo-componente.component.html',
  styleUrl: './primo-componente.component.css'
})
export class PrimoComponenteComponent {

}


