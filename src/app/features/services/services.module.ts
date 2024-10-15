import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicesComponent } from './pages/services/services.component';
import { ContentListService } from '../../shared/services/our-services-content/content-list.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    ServicesComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    FontAwesomeModule
  ],
  providers: [
    ContentListService
  ]
})
export class ServicesModule { }
