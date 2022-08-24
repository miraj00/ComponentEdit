import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exampleAngular';

  counter =0;

  names:string[] = ['bob', 'rob', 'miraj']
}
