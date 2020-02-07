import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
  styles: [`.router-link-active { background-color: red; }`]
})
export class NavbarComponent implements OnInit {
  
  
  constructor() { }

  ngOnInit() {
  }

}
