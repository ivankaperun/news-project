import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  collapsed = true;
  isAuthenticated = false;

  constructor(private authService: AuthService, private router: Router) {}

  private authSubscription(): void {
    this.authService.authUser.subscribe((user) => {
      if (user) {
        this.isAuthenticated = true;
      } else {
        this.isAuthenticated = false;
      }
    });
  }

  logout(): void {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/auth']);
    });
  }

  ngOnInit(): void {
    this.authSubscription();
  }
}
