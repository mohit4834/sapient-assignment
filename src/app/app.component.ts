import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SpaceX Launch Programs';

  constructor() {
    console.log('Welcome to Application by Mohit Goyal!')
  }

}
