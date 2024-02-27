import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UploadService {
  projectUrl = environment.http + environment.baseURL;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http: HttpClient) {}

  getAllCategory(): Promise<any> {
    const url = this.projectUrl + '/category';
    return firstValueFrom(this.http.get<any>(url, this.httpOptions));
  }

  createNewCategory(name: string): Promise<any> {
    const url = this.projectUrl + '/category';
    const body = { name };
    return firstValueFrom(this.http.post<any>(url, body));
  }

  getAllAuthor(): Promise<any> {
    const url = this.projectUrl + '/author';
    return firstValueFrom(this.http.get<any>(url, this.httpOptions));
  }

  createNewAuthor(name: string): Promise<any> {
    const url = this.projectUrl + '/author';
    const body = { name };
    return firstValueFrom(this.http.post<any>(url, body));
  }

  createNewQuote(data: FormData): Promise<any> {
    const url = this.projectUrl + '/quote-upload';
    return firstValueFrom(this.http.post<any>(url, data));
  }
}
