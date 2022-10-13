import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddLinkComponent } from './add-link.component';
import { MatInput, MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [AddLinkComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
})
export class AddLinkModule {}
