import {Component, Input} from '@angular/core';
import {NavParams, ModalController} from '@ionic/angular';
import {BehaviorSubject} from 'rxjs';

import * as moment from 'moment';
import {MatDialog} from '@angular/material';
import {ConfirmDialogComponent} from 'src/app/shared/modules/material/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-ex-material',
  templateUrl: 'ex-material.page.html',
  styleUrls: ['ex-material.page.scss']
})
export class ExMaterialPage {
  // "value" passed in componentProps
  @Input() value: number;

  result: string = '';

  constructor(
    private navParams: NavParams,
    private modalC: ModalController,
    public dialog: MatDialog
  ) {
    // componentProps can also be accessed at construction time using NavParams
  }

  async closeModal() {
    await this.modalC.dismiss({});
  }

  confirmDialog(): void {
    const dialogData = {
      title: '쏼라쏼라',
      message: `Are you sure you want to do this?`
    };

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: '400px',
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      this.result = dialogResult;
    });
  }
}
