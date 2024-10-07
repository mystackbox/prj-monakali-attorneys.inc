import { Component, OnInit } from '@angular/core';
import {NavigationEnd, NavigationError, NavigationStart, Router, TitleStrategy } from '@angular/router';
import { pageTitle } from '../../shared/pageTitle';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-master-page',
  templateUrl: './master-page.component.html',
  styleUrl: './master-page.component.scss',
  providers: [
    {
      provide: TitleStrategy,
      useClass: pageTitle
    }
  ]
})

export class MasterPageComponent{
  title: any;
  year = new Date().getFullYear()

  constructor(private titleService: Title, private router: Router,) {
    
    this.router.events.subscribe((event: any) => {
      let newTitle =  this.titleService.getTitle(); 
      this.title =  newTitle.split('|')[1];
      //this.title =  newTitle?.split('|').pop();

      // if (event instanceof NavigationStart) {
      //     Show loading indicator
      //     console.log("On Starting :" + this.title);
      // }

      // if (event instanceof NavigationEnd) {
      //     // Hide loading indicator
      //     console.log("On Ending :" + this.title);
      // }

      if (event instanceof NavigationError) {
          // Hide loading indicator
          // Present error to user
          console.log(event.error);
      }
    });
  }
}
