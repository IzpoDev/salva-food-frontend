import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { CartItem } from '../../interfaces/cart-item.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cartItems: CartItem[] = [];
  showCart = false;
  isProcessing = false;
  
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router
  ) {}
  
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initializeSearchFunctionality();
    }
  }

  addToCart(name: string, discountPrice: string, originalPrice: string, imageClass: string, expiryText: string, badgeClass: string): void {
    // Verificar si el producto ya está en el carrito
    const existingItem = this.cartItems.find(item => 
      item.name === name && item.expiryText === expiryText
    );
    
    if (!existingItem) {
      const newItem: CartItem = {
        name,
        discountPrice,
        originalPrice,
        imageClass,
        expiryText,
        expiryBadgeClass: badgeClass
      };
      
      this.cartItems.push(newItem);
      
      // Animación de éxito
      this.animateAddToCart();
    } else {
      // Ya existe el producto
      this.showAlreadyInCart();
    }
  }

  removeFromCart(index: number): void {
    if (index >= 0 && index < this.cartItems.length) {
      this.cartItems.splice(index, 1);
    }
  }

  toggleCart(): void {
    this.showCart = !this.showCart;
  }

  closeCart(): void {
    this.showCart = false;
  }

  getSubtotal(): string {
    const total = this.cartItems.reduce((sum, item) => {
      const price = parseFloat(item.discountPrice.replace('S/ ', ''));
      return sum + price;
    }, 0);
    return `S/ ${total.toFixed(2)}`;
  }

  getTotalSavings(): string {
    const savings = this.cartItems.reduce((sum, item) => {
      const original = parseFloat(item.originalPrice.replace('S/ ', ''));
      const discount = parseFloat(item.discountPrice.replace('S/ ', ''));
      return sum + (original - discount);
    }, 0);
    return `S/ ${savings.toFixed(2)}`;
  }

  proceedToSalvage(): void {
    if (this.cartItems.length === 0) return;
    
    this.isProcessing = true;
    
    // Simular procesamiento y redirigir
    setTimeout(() => {
      // Pasar datos del carrito al componente start-rescue
      this.router.navigate(['/start-rescue'], { 
        state: { 
          cartItems: this.cartItems,
          subtotal: this.getSubtotal(),
          totalSavings: this.getTotalSavings()
        } 
      });
      
      this.isProcessing = false;
    }, 1500);
  }

  private animateAddToCart(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Mostrar notificación visual
      const notification = document.createElement('div');
      notification.innerHTML = '✅ Producto agregado al carrito';
      notification.className = 'cart-notification';
      document.body.appendChild(notification);
      
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 3000);
    }
  }

  private showAlreadyInCart(): void {
    if (isPlatformBrowser(this.platformId)) {
      const notification = document.createElement('div');
      notification.innerHTML = '⚠️ Este producto ya está en tu carrito';
      notification.className = 'cart-notification warning';
      document.body.appendChild(notification);
      
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 3000);
    }
  }

  private initializeSearchFunctionality(): void {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        const searchInput = document.querySelector('.search-bar-fixed input');
        const searchCategories = document.getElementById('searchCategories');
        
        searchInput?.addEventListener('click', (event) => {
          event.stopPropagation();
          if (searchCategories) {
            searchCategories.classList.remove('hidden');
            setTimeout(() => {
              searchCategories.classList.add('visible');
            }, 10);
          }
        });
        
        document.addEventListener('click', () => {
          if (searchCategories && !searchCategories.classList.contains('hidden')) {
            searchCategories.classList.remove('visible');
            setTimeout(() => {
              searchCategories.classList.add('hidden');
            }, 300);
          }
        });
        
        const mobileMenuToggle = document.getElementById('mobileMenuToggle');
        const mobileMenu = document.getElementById('mobileMenu');

        mobileMenuToggle?.addEventListener('click', () => {
          mobileMenu?.classList.toggle('hidden');
        });
      }, 100);
    }
  }
}