import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  nav = false
  options = [
    {name:"All"},
    {name:".NET Development"},
    {name:"Azure Cloud Consultant"},
    {name:"Angular Development"},
    {name:"Responsive Web Design"},
    {name:"WordPress/PHP Development"},
    {name:"Shopify Development"},
    {name:"Search Engine Optimization"},
    {name:"Mobile App Development"},
    {name:"Graphics Design"},
  ]

  toggleNav(){
    this.nav = !this.nav
  }

}
