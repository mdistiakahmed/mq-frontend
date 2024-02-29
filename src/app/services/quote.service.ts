import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  projectUrl = environment.http + environment.baseURL;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http: HttpClient) {}

  getQuotes(skip: number, limit: number, category: any = null): Promise<any> {
    let url = `${this.projectUrl}/quotes?skip=${skip}&limit=${limit}`;
    if (category != null || category != undefined) {
      url = `${url}&category=${category.toLowerCase()}`;
    }
    return firstValueFrom(this.http.get<any>(url, this.httpOptions));
  }

  getQuoteById(quoteId: string): Promise<any> {
    let url = `${this.projectUrl}/quotes/${quoteId}`;
    return firstValueFrom(this.http.get<any>(url, this.httpOptions));
  }
}
