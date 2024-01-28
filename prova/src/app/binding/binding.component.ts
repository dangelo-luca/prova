import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  standalone: true,
  imports: [],
  templateUrl: './binding.component.html',
  styleUrl: './binding.component.css'
})
export class BindingComponent {

  cliccaBottone(){
    console.log("il bottone è stato cliccato")
  }

  gestioneCambioInput(event: any){
    console.log('nuovo valore dell\'input',event.target.value)
  }

}
