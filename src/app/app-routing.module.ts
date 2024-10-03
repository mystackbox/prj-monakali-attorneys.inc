import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './features/not-found/pages/not-found/not-found.component';
import { AboutModule } from './features/about/about.module';
import { ContactModule } from './features/contact/contact.module';
import { HomeModule } from './features/home/home.module';
import { MasterPageComponent } from './layout/master-page/master-page.component';
import { ServicesModule } from './features/services/services.module';
import { TeamModule } from './features/team/team.module';

const routes: Routes = [
   { path: '',   redirectTo: '/home', pathMatch: 'full' },
  {
    path: '', component: MasterPageComponent,
    //redirect to the component module
    children: [
      {
        path: '',
        loadChildren: () => import('./features/home/home.module').then((m):typeof HomeModule => m.HomeModule)
      },
      {
        path: 'home',
        loadChildren: () => import('./features/home/home.module').then((m):typeof HomeModule => m.HomeModule)
      },
      {
        path: 'about',
        loadChildren: () => import('./features/about/about.module').then((m):typeof AboutModule => m.AboutModule)
      },
      {
        path: 'services',
        loadChildren: () => import('./features/services/services.module').then((m):typeof ServicesModule => m.ServicesModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('./features/contact/contact.module').then((m):typeof ContactModule => m.ContactModule)
      },
      {
        path: 'team',
        loadChildren: () => import('./features/team/team.module').then((m):typeof TeamModule => m.TeamModule)
      },
      {
        path: 'page-not-found',
        loadChildren: () => import('./features/not-found/not-found.module').then((m):typeof NotFoundComponent => m.NotFoundModule)
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
  exports: [RouterModule]
})
export class AppRoutingModule { }
