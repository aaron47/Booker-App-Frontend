import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookmarksComponent } from './bookmarks.component';
import { CreateBookmarkModule } from './create-bookmark/create-bookmark.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [BookmarksComponent],
  imports: [
    CommonModule,
    CreateBookmarkModule,
    MatIconModule,
    MatDialogModule,
    MatCardModule,
  ],
  exports: [BookmarksComponent],
})
export class BookmarksModule {}
