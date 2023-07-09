import { Component } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent {
  data = 'loading';

  constructor() {
    this.onClick();
  }

  async onClick() {
    let url = 'https://jsonplaceholder.typicode.com/users/1';
    let res = await fetch(url);
    let Ldata = await res.json();

    if (Ldata) {
      this.data = JSON.stringify(Ldata);
    }
  }
}
