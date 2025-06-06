import { Component, OnInit, HostListener } from '@angular/core';
import { Product } from '../../interfaces/Product.interface'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-landing-page',
  imports: [],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent implements OnInit {
  isScrolled = false;
  isMobileMenuOpen = false;

  heroData = {
    title: 'Ahorra hasta 70% en productos a punto de vencer cerca de ti',
    description: 'Ofertas exclusivas de tiendas y bodegas que quieren evitar desperdicios. Productos frescos, precios bajos y tú ganas.',
    ctaText: 'Empieza a ahorrar'
  };

  products: Product[] = [
    {
      id: 1,
      name: 'Gaseosa Coca Cola',
      image: 'coca-cola.jpg',
      originalPrice: 3.50,
      salePrice: 2.50,
      expiryDays: 7,
      weight: '500ml',
      category: 'coca',
      discount: 29
    },
    {
      id: 2,
      name: 'Galleta Ritz',
      image: 'ritz.jpg',
      originalPrice: 1.50,
      salePrice: 1.00,
      expiryDays: 5,
      weight: '144.4g',
      category: 'ritz',
      discount: 33
    },
    {
      id: 3,
      name: 'Chocolate Vizzio',
      image: 'chocolate.jpg',
      originalPrice: 22.50,
      salePrice: 20.00,
      expiryDays: 4,
      weight: '182g',
      category: 'chocolate',
      discount: 11
    },
    {
      id: 4,
      name: 'Galleta OREO 108g',
      image: 'oreo.jpg',
      originalPrice: 3.00,
      salePrice: 2.00,
      expiryDays: 6,
      weight: '108g',
      category: 'oreo',
      discount: 33
    }
  ];

  ngOnInit(): void {
    // Component initialization
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    this.isScrolled = window.pageYOffset > 100;
  }

  scrollToSection(event: Event, sectionId: string): void {
    event.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    this.isMobileMenuOpen = false;
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  onProductClick(product: Product): void {
    console.log('Product clicked:', product);
    // Aquí puedes agregar la lógica para navegar al detalle del producto
    // o abrir un modal con más información
  }

  trackByProductId(index: number, product: Product): number {
    return product.id;
  }

  getProductImageClass(category: string): string {
    return `product-${category}`;
  }

  getProductEmoji(category: string): string {
    const emojis: { [key: string]: string } = {
      'coca': '🥤',
      'ritz': '🍪',
      'chocolate': '🍫',
      'oreo': '🍪'
    };
    return emojis[category] || '🛒';
  }

  getProductBrand(name: string): string {
    if (name.includes('Coca Cola')) return 'COCA COLA';
    if (name.includes('Ritz')) return 'RITZ';
    if (name.includes('Vizzio')) return 'VIZZIO';
    if (name.includes('OREO')) return 'OREO';
    return name.toUpperCase();
  }
}