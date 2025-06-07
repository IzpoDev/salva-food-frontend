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
    // Ejecuta la funcionalidad de búsqueda solo si estamos en el navegador
    if (isPlatformBrowser(this.platformId)) {
      this.initializeSearchFunctionality();
    }
  }

  private initializeSearchFunctionality(): void {
    // Esperar a que el DOM esté completamente cargado
    setTimeout(() => {
      const searchToggle = document.getElementById('searchToggle');
      const searchBar = document.getElementById('searchBar');
      const searchInput = searchBar?.querySelector('input');
      const searchCategories = document.getElementById('searchCategories');
      const body = document.body;

      // Crear overlay para cuando se expande la búsqueda
      const overlay = document.createElement('div');
      overlay.className = 'search-overlay';
      body.appendChild(overlay);

      // Toggle barra de búsqueda
      searchToggle?.addEventListener('click', (event) => {
        // Prevenir que el evento se propague
        event.stopPropagation();

        if (searchBar?.classList.contains('hidden')) {
          // Expandir
          searchBar.classList.remove('hidden');
          searchToggle.classList.add('active');
          overlay.classList.add('active');
          
          setTimeout(() => {
            searchBar.classList.add('expanded');
            if (searchInput) {
              searchInput.focus();
            }
          }, 10);
        } else {
          // Contraer
          this.closeSearch(searchBar, searchToggle, searchCategories, overlay);
        }
      });

      // Prevenir que los clics en la barra de búsqueda cierren la barra
      searchBar?.addEventListener('click', (event) => {
        event.stopPropagation();
      });

      // Mostrar categorías al hacer clic en el campo de búsqueda
      searchInput?.addEventListener('click', (event) => {
        event.stopPropagation();
        if (searchCategories) {
          searchCategories.classList.remove('hidden');
        }
      });

      // Prevenir que los clics en las categorías cierren la barra
      searchCategories?.addEventListener('click', (event) => {
        event.stopPropagation();
      });

      // Ocultar todo al hacer clic fuera
      document.addEventListener('click', () => {
        if (!searchBar?.classList.contains('hidden')) {
          this.closeSearch(searchBar, searchToggle, searchCategories, overlay);
        }
      });

      // También manejar el clic en el overlay
      overlay.addEventListener('click', () => {
        this.closeSearch(searchBar, searchToggle, searchCategories, overlay);
      });

      // Manejar el menú móvil
      const mobileMenuToggle = document.getElementById('mobileMenuToggle');
      const mobileMenu = document.getElementById('mobileMenu');

      mobileMenuToggle?.addEventListener('click', () => {
        mobileMenu?.classList.toggle('hidden');
      });
    }, 100);
  }

  private closeSearch(
    searchBar: HTMLElement | null, 
    searchToggle: HTMLElement | null,
    searchCategories: HTMLElement | null,
    overlay: HTMLElement
  ): void {
    if (searchBar && searchToggle) {
      searchBar.classList.remove('expanded');
      searchToggle.classList.remove('active');
      overlay.classList.remove('active');
      
      if (searchCategories) {
        searchCategories.classList.add('hidden');
      }
      
      setTimeout(() => {
        searchBar.classList.add('hidden');
      }, 300);
    }
  }
}