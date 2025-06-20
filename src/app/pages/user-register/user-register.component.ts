import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class RegisterComponent {
  
  registerData = {
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  };

  isLoading = false;
  errorMessage = '';
  showPassword = false;
  showConfirmPassword = false;

  constructor(private router: Router) {}

  onSubmit() {
    if (this.isLoading) return;

    this.isLoading = true;
    this.errorMessage = '';

    // Simulación visual de registro
    setTimeout(() => {
      console.log('Datos del registro:', this.registerData);
      this.router.navigate(['/home']);
      this.isLoading = false;
    }, 2000);
  }

  onGoogleRegister() {
    console.log('Registro con Google (solo diseño)');
    // Solo para efectos visuales
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  clearError() {
    this.errorMessage = '';
  }

  passwordsMatch(): boolean {
    return this.registerData.password === this.registerData.confirmPassword;
  }
}