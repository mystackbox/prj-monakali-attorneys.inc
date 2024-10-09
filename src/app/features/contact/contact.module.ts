import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './pages/contact/contact.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { ReactiveFormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
import { MapsComponent } from '../../components/maps/maps.component';


@NgModule({
  declarations: [
    ContactComponent,
    MapsComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    //for Google Maps
    GoogleMapsModule
  ]
})
export class ContactModule { 
    //for Font-Awesome to be accessible globally
    constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far);
  }
}
