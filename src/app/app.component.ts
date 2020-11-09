import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string ='Marc Bergman';
  address: string ="820 Carrington Place";
  phone: string = "513-328-7865";
  email: string = "mgbergman@gmail.com";
}
