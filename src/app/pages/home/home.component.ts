import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  
  ngOnInit(): void {
    // Ejecuta la funcionalidad solo si estamos en el navegador
    if (isPlatformBrowser(this.platformId)) {
      this.initializeSearchFunctionality();
    }
  }

  private initializeSearchFunctionality(): void {
    // Esperar a que el DOM esté completamente cargado
    setTimeout(() => {
      const searchInput = document.querySelector('.search-bar-fixed input');
      const searchCategories = document.getElementById('searchCategories');
      
      // Mostrar categorías con animación al hacer clic en el campo de búsqueda
      searchInput?.addEventListener('click', (event) => {
        event.stopPropagation();
        if (searchCategories) {
          searchCategories.classList.remove('hidden');
          // Esperar un pequeño instante para que se aplique la transición correctamente
          setTimeout(() => {
            searchCategories.classList.add('visible');
          }, 10);
        }
      });
      
      // Prevenir que los clics en las categorías cierren el menú
      searchCategories?.addEventListener('click', (event) => {
        event.stopPropagation();
      });
      
      // Ocultar categorías con animación al hacer clic fuera
      document.addEventListener('click', () => {
        if (searchCategories && !searchCategories.classList.contains('hidden')) {
          // Primero quitamos la visibilidad, manteniendo el elemento en el DOM
          searchCategories.classList.remove('visible');
          
          // Después de la transición, ocultamos el elemento completamente
          setTimeout(() => {
            searchCategories.classList.add('hidden');
          }, 300); // Coincidir con la duración de la transición
        }
      });
      
      // Manejar el menú móvil
      const mobileMenuToggle = document.getElementById('mobileMenuToggle');
      const mobileMenu = document.getElementById('mobileMenu');

      mobileMenuToggle?.addEventListener('click', () => {
        mobileMenu?.classList.toggle('hidden');
      });
    }, 100);
  }
}