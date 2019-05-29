import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { DirectivesNgSwitchComponent } from './pages/directives-ng-switch/directives-ng-switch.component';

export const routes: Routes = [
  { path: 'home', component: HomePageComponent, pathMatch: 'full' },
  { path: 'about', component: AboutPageComponent, pathMatch: 'full' },
  { path: 'projects', component: ProjectsComponent, pathMatch: 'full' },
  { path: 'directivesNgSwitch', component: DirectivesNgSwitchComponent, pathMatch: 'full' }
];