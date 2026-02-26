import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reward',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reward.component.html',
  styleUrls: ['./reward.component.css']
})
export class RewardComponent implements OnInit {
  isAnimating = false;
  pointsAnimating = false;
  isCardHovered = false;
  isSelected = false;
  showCart = false;
  isCheckingOut = false;
  showModal = false;

  ngOnInit() {
    setTimeout(() => {
      this.isAnimating = true;
    }, 100);
  }

  goBack() {
    console.log('Going back...');
    this.isAnimating = true;
    setTimeout(() => this.isAnimating = false, 500);
  }

  refresh() {
    console.log('Refreshing...');
    this.pointsAnimating = true;
    setTimeout(() => this.pointsAnimating = false, 600);
  }

  toggleMenu() {
    console.log('Toggle menu...');
    this.isAnimating = true;
    setTimeout(() => this.isAnimating = false, 300);
  }

  toggleProfile() {
    console.log('Toggle profile...');
  }

  onCardHover() {
    this.isCardHovered = true;
  }

  onCardLeave() {
    this.isCardHovered = false;
  }

  selectReward() {
    console.log('Reward selected...');
    this.isSelected = !this.isSelected;
    
    if (this.isSelected) {
      this.showCart = true;
      setTimeout(() => {
        this.pointsAnimating = true;
        setTimeout(() => this.pointsAnimating = false, 600);
      }, 200);
    } else {
      this.showCart = false;
    }
  }

  removeFromCart() {
    console.log('Removing from cart...');
    this.isSelected = false;
    this.showCart = false;
    
    this.pointsAnimating = true;
    setTimeout(() => this.pointsAnimating = false, 600);
  }

  checkout() {
    console.log('Processing checkout...');
    this.isCheckingOut = true;
    
    setTimeout(() => {
      this.isCheckingOut = false;
      this.isSelected = false;
      this.showCart = false;
      
      this.pointsAnimating = true;
      setTimeout(() => this.pointsAnimating = false, 600);
      
      // Mostrar modal en lugar de alert
      this.showModal = true;
    }, 2000);
  }

  closeModal() {
    this.showModal = false;
  }

  viewHistory() {
    console.log('Viewing history...');
    this.showModal = false;
    // Aquí puedes agregar lógica para navegar al historial
  }
}