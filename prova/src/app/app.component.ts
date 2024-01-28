import { Component, input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimoComponenteComponent } from './primo-componente/primo-componente.component';
import { BindingComponent } from './binding/binding.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,PrimoComponenteComponent,BindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'prova';

  constructor(){

    console.log('il costruttore è stato chiamato')

  }

  ngOnInit(){

    console.log('la funzione ngOnInit è stata chiamta')

  }
}
