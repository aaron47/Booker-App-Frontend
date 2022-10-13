import { Router } from '@angular/router';
import { CreateUserGQL, CreateUserInput } from './../../../generated-types';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { concatMap } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
})
export class SignupComponent implements OnInit {
  constructor(
    private readonly createUserGql: CreateUserGQL,
    private readonly loginService: LoginService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {}

  signUp(createUserData: CreateUserInput) {
    this.createUserGql
      .mutate({ createUserData })
      .pipe(
        concatMap(() => {
          return this.loginService.login(createUserData);
        })
      )
      .subscribe(() => {
        this.router.navigate(['/']);
      });
  }
}
