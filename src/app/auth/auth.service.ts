import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authUser = new BehaviorSubject<any>(null);

  constructor() {
    this.initAuthUser();
  }

  initAuthUser(): void {
    const user = localStorage.getItem('user');

    if (user) {
      const userObject = JSON.parse(user);
      this.authUser.next(userObject);
    } else {
      this.authUser.next(null);
    }
  }

  login({ username, password }): Observable<any> {
    if (username === 'admin' && password === '12345') {
      const user: any = {
        username,
      };

      this.authUser.next(user);
      localStorage.setItem('user', JSON.stringify(user));

      return of({ username, password });
    } else {
      return throwError('The username or password you entered is incorrect');
    }
  }

  logout(): Observable<any> {
    localStorage.clear();
    this.authUser.next(null);
    return of(true);
  }
}
