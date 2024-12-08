import { Component } from '@angular/core';
import { ContentListService } from '../../../../shared/services/our-services-content/content-list.service';

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
  }

}
