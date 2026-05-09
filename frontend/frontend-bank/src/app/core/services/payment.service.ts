import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private apiUrl = 'http://localhost:3004/api/payment';

  constructor(private http: HttpClient) {}

  pay(data: any) {

    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      Authorization: token || ''
    });

    return this.http.post(
      `${this.apiUrl}/pay`,
      data,
      { headers }
    );
  }

}