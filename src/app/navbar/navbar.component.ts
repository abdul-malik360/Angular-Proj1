import { Component } from '@angular/core'; //  first import this module, decorator,then create ts class

// define the decorator as a func and then pass some values as an obj
// we use selectors to define css (body tag, . for class , <h1> )
@Component({
  selector: 'app-navbar', // first you have to pass the selector value for this comp
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})

// after you create the component with the component decorator you must register it in angular modules (app.modules.ts)
export class NavbarComponent {
  message: string = 'Message from the nav ';
}
