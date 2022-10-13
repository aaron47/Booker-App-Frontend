import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;

  constructor(private readonly authService: AuthService) {
    this.isLoggedIn$ = authService.authenticated$;
  }

  ngOnInit(): void {}

  onLogout() {
    return this.authService.logout();
  }
}
