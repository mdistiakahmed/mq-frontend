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
  constructor(
    private router: Router,
    private http: HttpClient // private http: HttpClient
  ) {}

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
      this.http.get<any>('http://localhost:4000/api/hello', {})
    );
    console.log(x);
  }
}
