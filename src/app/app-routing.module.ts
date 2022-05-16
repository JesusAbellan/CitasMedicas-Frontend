import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
     path: 'signup-medic',
     loadChildren: () => import('./pages/signup-medic/signup-medic.module').then(m => m.SignupMedicModule) 
    },
  { 
    path: 'signup', 
    loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupModule) 
  },
  { 
    path: 'login', 
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) 
  },
  { 
    path: 'new-dates', 
    loadChildren: () => import('./pages/new-dates/new-dates.module').then(m => m.NewDatesModule) },
  { 
    path: 'news', 
    loadChildren: () => import('./pages/news/news.module').then(m => m.NewsModule) 
  },
  { 
    path: 'team', 
    loadChildren: () => import('./pages/team/team.module').then(m => m.TeamModule) 
  },
  { 
    path: 'home', 
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
