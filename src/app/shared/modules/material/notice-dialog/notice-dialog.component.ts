import {Component, OnInit, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-notice-dialog',
  templateUrl: './notice-dialog.component.html',
  styleUrls: ['./notice-dialog.component.scss']
})
export class NoticeDialogComponent {
  config: any = null;
  constructor(
    public dialogRef: MatDialogRef<NoticeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.config = data;
  }

  onClose(callbackFn?): void {
    this.dialogRef.close(callbackFn ? callbackFn : null);
  }
}
