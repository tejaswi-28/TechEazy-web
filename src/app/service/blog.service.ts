import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private apiUrl = 'https://blog.techeazyconsulting.com/';

  constructor(private http: HttpClient) {}

  getBlogs(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
