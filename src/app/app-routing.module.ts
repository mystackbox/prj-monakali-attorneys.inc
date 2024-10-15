import { NgModule } from '@angular/core';
import { RouterModule, Routes, TitleStrategy } from '@angular/router';
import { NotFoundComponent } from './features/not-found/pages/not-found/not-found.component';
import { AboutModule } from './features/about/about.module';
import { ContactModule } from './features/contact/contact.module';
import { HomeModule } from './features/home/home.module';
import { MasterPageComponent } from './layout/master-page/master-page.component';
import { ServicesModule } from './features/services/services.module';
import { TeamModule } from './features/team/team.module';
import { pageTitle } from './shared/services/page-title/pageTitle';

const routes: Routes = [
   { path: '',   redirectTo: '/home', pathMatch: 'full' },
  {
    path: '', component: MasterPageComponent,
    //redirect to the component module
    children: [
      {
        path: '',
        loadChildren: () => import('./features/home/home.module').then((m):typeof HomeModule => m.HomeModule),
        title:'Home'      
      },
      {
        path: 'home',
        loadChildren: () => import('./features/home/home.module').then((m):typeof HomeModule => m.HomeModule),
        title:'Home'
      },
      {
        path: 'about',
        loadChildren: () => import('./features/about/about.module').then((m):typeof AboutModule => m.AboutModule),
        title:'About Us'
      },
      {
        path: 'services',
        loadChildren: () => import('./features/services/services.module').then((m):typeof ServicesModule => m.ServicesModule),
        title:'Our Services'
      },
      {
        path: 'contact',
        loadChildren: () => import('./features/contact/contact.module').then((m):typeof ContactModule => m.ContactModule),
        title:'Contact Us'
      },
      {
        path: 'team',
        loadChildren: () => import('./features/team/team.module').then((m):typeof TeamModule => m.TeamModule),
        title:'Our team'
      },
      {
        path: 'page-not-found',
        loadChildren: () => import('./features/not-found/not-found.module').then((m):typeof NotFoundComponent => m.NotFoundModule),
        title:'Page not found'
      },
      {
        path: '**',
        redirectTo: '/page-not-found'
      }
    ]
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
  providers: [
    {
      provide: TitleStrategy,
      useClass: pageTitle
    }
  ]
})
export class AppRoutingModule { }
