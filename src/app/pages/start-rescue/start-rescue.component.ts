import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { CartItem } from '../../interfaces/cart-item.interface';

@Component({
  selector: 'app-start-rescue',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './start-rescue.component.html',
  styleUrls: ['./start-rescue.component.css']
})
export class StartRescueComponent implements OnInit {
  cartItems: CartItem[] = [];
  subtotal: string = 'S/ 0.00';
  totalSavings: string = 'S/ 0.00';
  
  // Estados de los modales
  showQRModal = false;
  showSuccessModal = false;
  isProcessingPayment = false;
  
  // Datos para el código único
  uniqueCode = '';
  pickupLocation = 'Jr. Ganoza #1456';

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router
  ) {
    // Recibir datos del state navigation
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.cartItems = navigation.extras.state['cartItems'] || [];
      this.subtotal = navigation.extras.state['subtotal'] || 'S/ 0.00';
      this.totalSavings = navigation.extras.state['totalSavings'] || 'S/ 0.00';
    }
  }

  ngOnInit(): void {
    // Si no hay productos, redirigir al home
    if (this.cartItems.length === 0) {
      this.router.navigate(['/home']);
    }
    
    this.generateUniqueCode();
  }

  proceedToPay(): void {
    this.isProcessingPayment = true;
    
    // Simular procesamiento de pago
    setTimeout(() => {
      this.isProcessingPayment = false;
      this.showQRModal = true;
      
      // Después de 3 segundos, mostrar el modal de éxito
      setTimeout(() => {
        this.showQRModal = false;
        this.showSuccessModal = true;
      }, 3000);
    }, 2000);
  }

  closeQRModal(): void {
    this.showQRModal = false;
    this.showSuccessModal = true;
  }

  closeSuccessModal(): void {
    this.showSuccessModal = false;
    // Redirigir al home después de cerrar
    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 500);
  }

  goToHome(): void {
    this.router.navigate(['/home']);
  }

  private generateUniqueCode(): void {
    // Generar código único de 8 dígitos
    const numbers = Math.floor(10000000 + Math.random() * 90000000);
    const letters = Math.random().toString(36).substring(2, 4).toUpperCase();
    this.uniqueCode = `${numbers}${letters}`;
  }
}