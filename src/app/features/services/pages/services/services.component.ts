import { Component } from '@angular/core';
import { ContentListService } from '../../../../shared/services/our-services-content/content-list.service';
import { json } from 'stream/consumers';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

  servicesItems: any;
  constructor(private serviceList: ContentListService){

  }

  ngOnInit(){
    this.getServicesList();
  }

  getServicesList(){
    this.servicesItems = this.serviceList.getContentList();
    console.log(this.servicesItems)
  }

}
