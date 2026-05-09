import { Component } from '@angular/core'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  imports: [MatToolbarModule,
    MatButtonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class NavbarComponent {
  constructor(private router: Router) {}
  logout() {

    localStorage.removeItem('token');
  
    this.router.navigate(['']);
  
  }
}
