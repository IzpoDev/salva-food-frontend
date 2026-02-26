import { Routes } from '@angular/router';
<<<<<<< HEAD

export const routes: Routes = [
  { 
    path: 'login', 
    loadComponent: () => import('./auth/pages/login/login').then(c => c.Login)
  },
  { 
    path: '', 
    loadComponent: () => import('./feedback/pages/feedback/feedback.component').then(c => c.FeedbackComponent)
  },
  {
    path: 'forgot-password',
    loadComponent: () => import('./auth/pages/forgot-password/forgot-password').then(c => c.ForgotPassword)
  },
  { 
    // Comodín para rutas no encontradas siempre al final para evitar incoherencias con rutas válidas
    path: '**', 
    redirectTo: '' 
  }
];
=======
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { HomeComponent } from './pages/home/home.component';
import { RewardComponent } from './pages/reward/reward.component';
import { StartRescueComponent } from './pages/start-rescue/start-rescue.component';

export const routes: Routes = [
 {path:'', component: LandingPageComponent},
 {path:'home', component: HomeComponent},
 {path:'reward', component: RewardComponent },
 {path: 'start-rescue', component: StartRescueComponent}
];
>>>>>>> 6c955a422f619724b8234e1845b147a334a74b1e
