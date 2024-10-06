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
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FormsModule } from '@angular/forms';

//for font-awesome
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { SharethisAngularModule } from 'sharethis-angular';
import { SocialMediaButtonsComponent } from './components/social-media-buttons/social-media-buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    MasterPageComponent,
    HeaderComponent,
    FooterComponent,
    SideBarComponent,
    NavBarComponent,
    CarouselComponent,
    SocialMediaButtonsComponent
  ],
  imports: [
    BrowserModule,
    SharethisAngularModule,
    AppRoutingModule,
    //font-awesome
    FontAwesomeModule,
    FormsModule,
    //for ngx-bootstrap carousel
    CarouselModule.forRoot(),
    
  ],
  providers: [
    provideClientHydration(), {
      provide: LocationStrategy,
      useClass: PathLocationStrategy,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
    //for Font-Awesome to be accessible globally
    constructor(library: FaIconLibrary) {
      library.addIconPacks(fas, far);
    }
 }
