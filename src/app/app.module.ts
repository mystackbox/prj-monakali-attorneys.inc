import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/pages/home/home.component';
import { AboutComponent } from './features/about/pages/about/about.component';
import { ContactComponent } from './features/contact/pages/contact/contact.component';
import { NotFoundComponent } from './features/not-found/pages/not-found/not-found.component';
import { TeamComponent } from './features/team/pages/team/team.component';
import { ServicesComponent } from './features/services/pages/services/services.component';
import { MasterPageComponent } from './layout/master-page/master-page.component';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    MasterPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(), {
      provide: LocationStrategy,
      useClass: PathLocationStrategy,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
