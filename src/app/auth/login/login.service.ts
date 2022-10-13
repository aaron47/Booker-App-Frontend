import { CreateUserInput, User } from './../../../generated-types';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private readonly http: HttpClient) {}

  login(loginRequest: CreateUserInput) {
    return this.http.post<User>('api/auth/login', loginRequest);
  }
}
