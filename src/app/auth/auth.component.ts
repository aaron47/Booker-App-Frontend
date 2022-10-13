import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent implements OnInit {
  @Input() submitHandler: string;
  @Output() onSubmitEvent = new EventEmitter<any>();

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);

  getEmailErrorMessage(): string {
    if (this.email.hasError('required')) {
      return 'You must enter an email';
    }

    return this.email.hasError('email') ? 'You must enter a valid email' : '';
  }

  getPasswordErrorMessage(): string {
    if (this.password.hasError('required')) {
      return 'You must enter a password';
    }

    return '';
  }

  onSubmit(): void {
    this.onSubmitEvent.emit({
      email: this.email.value,
      password: this.password.value,
    });
  }

  constructor() {}

  ngOnInit(): void {}
}
