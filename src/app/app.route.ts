import { Routes } from '@angular/router';

import { LoaderComponent } from './common/loader/loader.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
   {
    path: 'loader',
    component: LoaderComponent
  },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent }

];
