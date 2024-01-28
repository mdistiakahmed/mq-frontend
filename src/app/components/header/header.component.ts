import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  imageUrl = 'assets/search.svg';
  isMoreButtonClicked = false;
  private baseUrl: string;
  constructor(
    private router: Router,
    private http: HttpClient // private http: HttpClient
  ) {
    this.baseUrl = this.getBaseUrl();
  }

  navigateToHomePage() {
    this.router.navigate(['/']);
  }

  navigateToAdminPage() {
    this.router.navigate(['/admin']);
  }

  toggleMoreButton() {
    this.isMoreButtonClicked = !this.isMoreButtonClicked;
  }

  async callApi() {
    const x = await firstValueFrom(
      this.http.get<any>(`${this.baseUrl}/api/hello`, {})
    );
    console.log(x);
  }

  private getBaseUrl(): string {
    // Return different base URLs based on the environment
    console.log(window.location.hostname);
    if (window.location.hostname === 'mq-frontend.vercel.app') {
      return 'https://mq-frontend.vercel.app'; // Change this to your actual API domain
    } else {
      return 'http://localhost:4000'; // Default base URL for local development
    }
  }
}
