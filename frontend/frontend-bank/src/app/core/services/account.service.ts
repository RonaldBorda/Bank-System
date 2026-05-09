import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private apiUrl = 'http://localhost:3004/api/account';

  constructor(private http: HttpClient) {}

  getAccounts() {

    const token = localStorage.getItem('token');
  
    const headers = new HttpHeaders({
      Authorization: token || ''
    });
  
    return this.http.get(
      `${this.apiUrl}/my-accounts`,
      { headers }
    );
  }

}