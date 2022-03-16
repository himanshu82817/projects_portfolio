import { AfterViewInit, Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { OwlCarousel } from 'ngx-owl-carousel';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit , AfterViewInit {
  @ViewChild('owlElement') owlElement: OwlCarousel;
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(){
   
  }
  @HostListener('wheel', ['$event'])
  onMousewheel(event){
    var element1 = document.getElementById('txt')
    this.ngAfterViewInit()
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

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag:true,
    touchDrag: false,
    pullDrag: false,
    dots:false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav:false
  }
}
