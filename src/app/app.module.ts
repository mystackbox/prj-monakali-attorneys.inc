import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MasterPageComponent } from './layout/master-page/master-page.component';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SideBarComponent } from './layout/side-bar/side-bar.component';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CarouselConfig, CarouselModule } from 'ngx-bootstrap/carousel';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MasterPageComponent,
    HeaderComponent,
    FooterComponent,
    SideBarComponent,
    NavBarComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    //for ngx-bootstrap carousel
    CarouselModule.forRoot()
  ],
  providers: [
    //carousel behavioural config
    // { 
    //   provide: CarouselConfig, useValue: { 
    //                                         interval: 5000, 
    //                                         noPause: false, 
    //                                         showIndicators: true 
    //                                       } 
    // },
    provideClientHydration(), {
      provide: LocationStrategy,
      useClass: PathLocationStrategy,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
