import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-tv-dialog',
  templateUrl: './tv-dialog.component.html',
  styleUrls: ['./tv-dialog.component.scss']
})
export class TvDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<TvDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  closeDialog() {
    this.dialogRef.close('movie');
  }

  ngOnInit() {
  }
}
