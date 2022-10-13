import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly authenticated = new Subject<boolean>();
  authenticated$ = this.authenticated.asObservable();

  constructor(
    private readonly http: HttpClient,
    private readonly router: Router
  ) {}

  isAuthenticated() {
    return this.http.get<boolean>('api/auth').pipe(
      tap(() => this.authenticated.next(true)),
      catchError(() => of(false))
    );
  }

  logout() {
    this.http.post('api/auth/logout', {}).subscribe(() => {
      this.authenticated.next(false);
      this.router.navigate(['/login']);
    });
  }
}
