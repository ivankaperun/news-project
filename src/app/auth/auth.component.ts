import { Component, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  isLoading = false;
  error: string = null;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }

    const username = form.value.email;
    const password = form.value.password;

    this.authService.login({ username, password }).subscribe(
      (resData) => {
        this.router.navigate(['/profile']);
      },
      (error) => {
        this.error = error;
      }
    );
  }

  // ngOnDestroy() {
  //   if (this.closeSub) {
  //     this.closeSub.unsubscribe();
  //   }
  // }
}
