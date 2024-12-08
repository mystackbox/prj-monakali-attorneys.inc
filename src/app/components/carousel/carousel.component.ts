import { Component } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
  providers: [
      { provide: CarouselConfig, useValue: { 
        interval: 7000, 
        noPause: false, 
        showIndicators: true,
        isAnimated: true
      } 
    }
 ],
})
export class CarouselComponent {

  slides = [
    {image: 'carousel-img/5.jpg', title: 'We are a Law firm', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    {image: 'carousel-img/2.jpg', title: 'Reliable Services' , description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    {image: 'carousel-img/6.jpg', title: 'Quality Legal Services' , description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    {image: 'carousel-img/1.jpg', title: 'Contact us today' , description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
 ];
  
 noWrapSlides = false;
 showIndicator = true;
 constructor() { 

 }

 ngOnInit(): void {
  this.slides;
 }

}
