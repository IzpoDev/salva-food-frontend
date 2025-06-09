import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { HomeComponent } from './pages/home/home.component';
import { RewardComponent } from './pages/reward/reward.component';

export const routes: Routes = [
 {path:'', component:LandingPageComponent},
 {path:'home', component:HomeComponent},
 {path:'reward', component:RewardComponent }
];
