import {Component, Input} from '@angular/core';
import {NavParams, ModalController} from '@ionic/angular';
import {BehaviorSubject} from 'rxjs';

import * as moment from 'moment';
import {MatDialog} from '@angular/material';
import {NoticeDialogService} from 'src/app/shared/modules/material/notice-dialog/services/notice-dialog.service';

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
    private dialogS: NoticeDialogService
  ) {
    // componentProps can also be accessed at construction time using NavParams
  }

  async closeModal() {
    await this.modalC.dismiss({});
  }

  confirmDialog(): void {
    this.dialogS.confirm({
      message: '등록중인 발전소가 있습니다. <br> 계속 등록하시겠습니까?',
      callbackFnY: () => {
        console.log('콜백 실행!');
      }
    });
  }
  alertDialog(): void {
    this.dialogS.alert({
      message: '발전량 데이터를 수집 중입니다.',
      callbackFnY: () => {
        console.log('콜백 실행!');
      }
    });
  }
}
