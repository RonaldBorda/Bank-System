import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
@Component({
  selector: 'app-login',
  imports: [ 
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComponent {
  correo = '';
  password = '';
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}
  login() {
    const data = {
      correo: this.correo,
      password: this.password
    };
    this.authService.login(data).subscribe({
      next: (response: any) => {
        localStorage.setItem('token', response.token);
        setTimeout(() => {
        this.router.navigate(['/dashboard']);
        }, 100);
      },
      error: (error) => {
        console.log(error);
        alert('Credenciales incorrectas');
      }
    });
  
  }
}

