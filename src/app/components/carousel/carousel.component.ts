import { Component } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
  providers: [
      { provide: CarouselConfig, useValue: { 
        interval: 5000, 
        noPause: false, 
        showIndicators: true 
      } 
    }
 ],
})
export class CarouselComponent {

  slides = [
    {image: 'assets/carousel-img/5.jpg', title: 'We are a Law firm', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    {image: 'assets/carousel-img/2.jpg', title: 'Professional Services' , description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    {image: 'assets/carousel-img/6.jpg', title: 'Quality Legal Services' , description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    {image: 'assets/carousel-img/3.jpg', title: 'Reliable Legal Serivce' , description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
 ];
 noWrapSlides = false;
 showIndicator = true;
 constructor() { }

 ngOnInit(): void {
 }

}
