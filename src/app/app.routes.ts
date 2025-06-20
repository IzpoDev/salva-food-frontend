import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { HomeComponent } from './pages/home/home.component';
import { RewardComponent } from './pages/reward/reward.component';
import { StartRescueComponent } from './pages/start-rescue/start-rescue.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/user-register/user-register.component';

export const routes: Routes = [
 {path:'', component: LandingPageComponent},
 {path:'home', component: HomeComponent},
 {path:'reward', component: RewardComponent },
 {path: 'start-rescue', component: StartRescueComponent},
 {path: 'login', component: LoginComponent},
 {path: 'register', component: RegisterComponent}, 
 {path: '**', redirectTo: ''} 
];
