import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  loginData = {
    email: '',
    password: ''
  };

  isLoading = false;
  errorMessage = '';

  constructor(private router: Router) {}

  onSubmit() {
    if (this.isLoading) return;

    this.isLoading = true;
    this.errorMessage = '';

    // Simulación visual de login
    setTimeout(() => {
      // Siempre redirige al home para propósitos de diseño
      console.log('Datos del formulario:', this.loginData);
      this.router.navigate(['/home']);
      this.isLoading = false;
    }, 1500);
  }

  clearError() {
    this.errorMessage = '';
  }
}