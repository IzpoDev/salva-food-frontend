import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
 {path:'', component:LandingPageComponent},
 {path:'home', component:HomeComponent}
];
