import { CreateUserInput } from './../../../generated-types';
import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  constructor(
    private readonly loginService: LoginService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {}

  login(createUserData: CreateUserInput): void {
    this.loginService.login(createUserData).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
