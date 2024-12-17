import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private apiUrl = 'https://blog.techeazyconsulting.com/'; // Your blog API URL

  constructor(private http: HttpClient) {}

  getBlogs(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
