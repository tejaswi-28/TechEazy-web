import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'https://api.techeazyconsulting.com/dms/api/classes';
  private token =
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI0Iiwic3ViIjoiZ2Fpa3dhZHRlamFzd2kwMkBnbWFpbC5jb20iLCJpYXQiOjE3MzQ1MDAzNzMsImV4cCI6MTczNDUwMzk3M30._rSWdTm_3ZV_ZEjtMi5Qw97f3BLz_88uYPFiK4MIjz4';

  constructor(private http: HttpClient) {}

  getClasses(): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: this.token,
      'Content-Type': 'application/json',
    });
    return this.http.get<any>(this.apiUrl, { headers });
  }
}
