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
      title: '알림',
      message: `본문을 넣어주세요!<div class="test" style="color:red;">eeeee</div>`
    };

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      this.result = dialogResult;

      console.log('this.result', this.result);

      if (this.result) {
        // 확인 눌렀을때
        alert('확인');
      } else {
        // 취소 눌렀을때
        alert('취소');
      }
    });
  }
}
