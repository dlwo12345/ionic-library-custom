import {Component, Input} from '@angular/core';
import {NavParams, ModalController} from '@ionic/angular';
import {BehaviorSubject} from 'rxjs';

import * as moment from 'moment';

@Component({
  selector: 'app-ex-primeng',
  templateUrl: 'ex-primeng.page.html',
  styleUrls: ['ex-primeng.page.scss']
})
export class ExPrimengPage {
  text: string;

  disabled: boolean = true;

  toggleDisabled() {
    this.disabled = !this.disabled;
  }

  // "value" passed in componentProps
  @Input() value: number;

  constructor(private navParams: NavParams, private modalC: ModalController) {
    // componentProps can also be accessed at construction time using NavParams
  }

  async closeModal() {
    await this.modalC.dismiss({});
  }
}
