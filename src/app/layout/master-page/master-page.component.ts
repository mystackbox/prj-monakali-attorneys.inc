import { Component } from '@angular/core';
import {NavigationError, Router, TitleStrategy } from '@angular/router';
import { pageTitle } from '../../shared/services/page-title/pageTitle';
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
  
      if (event instanceof NavigationError) {
          console.log(event.error);
      }
    });
  }
}
