import { AfterViewInit, Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { OwlCarousel } from 'ngx-owl-carousel';

import * as $ from 'jquery'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent implements OnInit, AfterViewInit {
  @ViewChild('owlElement') owlElement: OwlCarousel
  
  constructor() { }
 
  
  test(){
    console.log('test')
  }
  @HostListener('wheel', ['$event'])
  onMousewheel(event){
    if(event.wheelDelta<0){
      // console.log(event.wheelDelta)
      // console.log(elm2)
      this.owlElement.next()
      // elm.click()
    }
    if(event.wheelDelta>0){
      this.owlElement.previous()
    // console.log(this.owlElement.items)
  }
  }
  ngAfterViewInit(){
   
  }
  ngOnInit(): void {
    
  }
  
  cards = [
    [
      { id:"1", name:'Online Book Store Mobile App', img: '/assets/images/mobile-app-scaled.jpg' },
      { id:"2", name:'Coast to Mountain Running' , img: '/assets/images/Coast-to-Mountain-Running-scaled.jpg' },
    ],
    [
      { id:"3", name:'Online Medical Store' , img: '/assets/images/Medi-scaled.jpg' },
      { id:"4", name:'Diamond Jewellry Online Store' , img: '/assets/images/Jewel-scaled.jpg' },
    ],
    [
      { id:"5", name:'Online Watch Store' , img: '/assets/images/watches-scaled.jpg' },
      { id:"6", name:'Online Body Care Products Store' , img: '/assets/images/Body-Central-scaled.jpg' },
    ],
    [
      { id:"7", name:'Tea & Coffee Store' , img: '/assets/images/Tea-and-Coffee-scaled.jpg' },
      { id:"1", name:'Online Book Store Mobile App', img: '/assets/images/mobile-app-scaled.jpg' },
    ]
    
  ]

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag:true,
    touchDrag: false,
    pullDrag: false,
    dots:true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      650: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav:false
  }

  

  
}
