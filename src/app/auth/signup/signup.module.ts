import { CreateUserGQL } from './../../../generated-types';
import { SignupComponent } from './signup.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from '../auth.module';

@NgModule({
  declarations: [SignupComponent],
  imports: [CommonModule, AuthModule],
})
export class SignupModule {}
