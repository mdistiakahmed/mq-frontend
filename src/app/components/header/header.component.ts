import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  categoryList = [
    'Love',
    'Religion',
    'Job',
    'Family',
    'Friends',
    'Marriage',
    'Others',
  ];
  selectedCategory: string | null = null;
  imageUrl = 'assets/search.svg';
  isMoreButtonClicked = false;
  private baseUrl: string = 'http://3.108.190.91'; // EC2 public ip address
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

  onCategorySelect(category: string) {
    this.selectedCategory = category;
    this.router.navigate([`/quote/${category}`]);
  }
}
