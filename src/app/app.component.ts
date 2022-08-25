import { Component } from '@angular/core';
import { Player } from './interfaces/player';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exampleAngular';

  counter =0;

  price:number = 10.25;

  names:string[] = ['bob', 'rob', 'miraj']

  isValid:boolean = false;    
  
  players:Player[] =[
  {name: 'Bob', age: 10},
  {name: 'Steve', age:30},
  {name: 'George', age:35},
];

}
