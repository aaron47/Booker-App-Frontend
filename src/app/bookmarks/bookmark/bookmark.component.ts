import { AddLinkComponent } from './add-link/add-link.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { BookmarkGQL, Link, LinksGQL } from './../../../generated-types';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Bookmark } from 'src/generated-types';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.css'],
})
export class BookmarkComponent implements OnInit {
  bookmark: Bookmark;
  links: Link[];
  isLoading = true;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly bookmarkGql: BookmarkGQL,
    private readonly dialog: MatDialog,
    private readonly linksGql: LinksGQL
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap((params) => {
          return this.bookmarkGql.watch({ _id: params['id'] }).valueChanges;
        }),
        switchMap((result) => {
          this.bookmark = result.data.bookmark;
          return this.linksGql.watch({ urls: result.data.bookmark.links })
            .valueChanges;
        })
      )
      .subscribe((result) => {
        this.isLoading = result.loading;
        this.links = result.data.links;
      });
  }

  onAdd() {
    this.dialog.open(AddLinkComponent, {
      data: { bookmark: this.bookmark },
    });
  }

  onLinkClick(url: string) {
    window.open(url, '_blank');
  }
}
