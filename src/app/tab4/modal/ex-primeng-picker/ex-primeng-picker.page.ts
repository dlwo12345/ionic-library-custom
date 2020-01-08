import {Component, Input} from '@angular/core';
import {NavParams, ModalController} from '@ionic/angular';

@Component({
  selector: 'app-ex-primeng-picker',
  templateUrl: 'ex-primeng-picker.page.html',
  styleUrls: ['ex-primeng-picker.page.scss']
})
export class ExPrimengPickerPage {
  date12: Date;
  // Calendar 옵션 세팅
  calendarOptions = {
    firstDayOfWeek: 0,
    dayNames: [
      '일요일',
      '월요일',
      '화요일',
      '수요일',
      '목요일',
      '금요일',
      '토요일'
    ],
    dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
    dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
    monthNames: [
      '1월',
      '2월',
      '3월',
      '4월',
      '5월',
      '6월',
      '7월',
      '8월',
      '9월',
      '10월',
      '11월',
      '12월'
    ],
    monthNamesShort: [
      '1월',
      '2월',
      '3월',
      '4월',
      '5월',
      '6월',
      '7월',
      '8월',
      '9월',
      '10월',
      '11월',
      '12월'
    ],
    today: '오늘',
    clear: '초기화'
  };

  // "value" passed in componentProps
  @Input() value: number;

  constructor(private navParams: NavParams, private modalC: ModalController) {
    // componentProps can also be accessed at construction time using NavParams
  }

  async closeModal() {
    await this.modalC.dismiss({});
  }
}
