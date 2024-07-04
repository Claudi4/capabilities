import { Component, Inject, Input, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CasesData } from '../../cases-data';

import { SafePipe } from 'safe-pipe';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-single-case',
  standalone: true,
  imports: [CommonModule, SafePipe, CarouselModule ],
  templateUrl: './single-case.component.html',
  styleUrl: './single-case.component.scss',
  schemas: [NO_ERRORS_SCHEMA],
})
export class SingleCaseComponent {
  @Input() casesData!:CasesData;

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['<img src="assets/images/carousel-arrow-prev.svg" alt="arrow" width=15/>', '<img src="assets/images/i-arrow-right.png" alt="arrow" width=15 />'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }

  constructor(public dialog: MatDialog) {}

  openDialog(url: string, id: string) {
    this.dialog.open(DialogDataExampleDialog, {
      data: {
        url,
        id
      },
      height: '500px',
      width: '600px',
      panelClass: 'dialog-modal'
    });
  }
}

@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'single-case-dialog.html',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent],
})
export class DialogDataExampleDialog {
  trustedUrl: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public sanitizer: DomSanitizer) {
    this.trustedUrl = this.sanitizer.bypassSecurityTrustUrl(this.data);
  }

  cleanURL(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}