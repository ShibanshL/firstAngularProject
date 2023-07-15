import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodosComponent } from './myNewComponent/todos/todos.component';
import { HeaderComponent } from './myNewComponent/header/header.component';
import { BodyComponent } from './myNewComponent/body/body.component';
import { FooterComponent } from './myNewComponent/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
