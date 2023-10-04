import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  inscrever(){
    window.open("https://www.eventbrite.com.br/e/729800030537/", "_blank")
  }
}
