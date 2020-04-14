import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
})
export class NavbarComponent implements OnInit {
  
  public tabs = [
  	{
  		'name' : 'home',
  		'title' : 'HOME'
  	},{
  		'name' : 'about',
  		'title' : 'ABOUT ME'
  	},{
  		'name' : 'projects',
  		'title' : 'PROJECTS'
  	},{
  		'name' : 'contact',
  		'title' : 'CONTACT'
  	},{
  		'name' : 'cv',
  		'title' : 'CV'
  	},
  ];  
 
  constructor() { }

  ngOnInit() {

  }

}
