import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = `We are Learining`;
  constructor() {
    setTimeout(() => {
      this.title = 'we learnt something';
    }, 2000);
  }
}
