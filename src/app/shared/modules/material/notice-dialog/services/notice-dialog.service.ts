import {Injectable} from '@angular/core';
import {MatDialog} from '@angular/material';
import {ConfirmConfig, AlertConfig} from '../models/notice-dialog.model';
import {NoticeDialogComponent} from '../notice-dialog.component';

@Injectable()
export class NoticeDialogService {
  constructor(public dialog: MatDialog) {}

  confirm(config: ConfirmConfig): void {
    const {message, callbackFnY, callbackFnN, confirm, cancel} = config;

    const dialogRef = this.dialog.open(NoticeDialogComponent, {
      data: {
        message,
        callbackFnY: callbackFnY ? callbackFnY : null,
        callbackFnN: callbackFnN ? callbackFnN : null,
        confirm: confirm ? confirm : '확인',
        cancel: cancel ? cancel : '취소'
      }
    });

    dialogRef.afterClosed().subscribe(fn => {
      if (fn) {
        fn();
      }
    });
  }

  alert(config: AlertConfig): void {
    const {message, callbackFnY, confirm} = config;

    const dialogRef = this.dialog.open(NoticeDialogComponent, {
      data: {
        message,
        callbackFnY: callbackFnY ? callbackFnY : null,
        confirm: confirm ? confirm : '확인'
      }
    });

    dialogRef.afterClosed().subscribe(fn => {
      if (fn) {
        fn();
      }
    });
  }
}
