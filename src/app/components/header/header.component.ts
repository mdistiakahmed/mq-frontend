import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  imageUrl = 'assets/search.svg';
  isMoreButtonClicked = false;
  constructor(private router: Router) {}

  navigateToHomePage() {
    this.router.navigate(['/']);
  }

  navigateToAdminPage() {
    this.router.navigate(['/admin']);
  }

  toggleMoreButton() {
    this.isMoreButtonClicked = !this.isMoreButtonClicked;
  }
}
