import {Component} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {ExMaterialPage} from './modal/ex-material/ex-material.page';
import {ExPrimengPage} from './modal/ex-primeng/ex-primeng.page';
import {ExMaterialPickerPage} from './modal/ex-material-picker/ex-material-picker.page';
import {ExPrimengPickerPage} from './modal/ex-primeng-picker/ex-primeng-picker.page';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {
  modal: any;
  constructor(private modalC: ModalController) {}

  /**
   * stacked 컬럼차트 예제 출력
   */
  async showExMaterialModal() {
    this.modal = await this.modalC.create({
      component: ExMaterialPage,
      componentProps: null
    });

    this.modal.onDidDismiss().then(dataReturned => {
      if (dataReturned !== null) {
        // this.dataReturned = dataReturned.data;
        // alert('Modal Sent Data :'+ dataReturned);
      }
    });

    return await this.modal.present();
  }
  /**
   * stacked 컬럼차트 예제 출력
   */
  async showExMaterialPickerModal() {
    this.modal = await this.modalC.create({
      component: ExMaterialPickerPage,
      componentProps: null
    });

    this.modal.onDidDismiss().then(dataReturned => {
      if (dataReturned !== null) {
        // this.dataReturned = dataReturned.data;
        // alert('Modal Sent Data :'+ dataReturned);
      }
    });

    return await this.modal.present();
  }
  async showExPrimengModal() {
    this.modal = await this.modalC.create({
      component: ExPrimengPage,
      componentProps: null
    });

    this.modal.onDidDismiss().then(dataReturned => {
      if (dataReturned !== null) {
        // this.dataReturned = dataReturned.data;
        // alert('Modal Sent Data :'+ dataReturned);
      }
    });

    return await this.modal.present();
  }
  async showExPrimengPickerModal() {
    this.modal = await this.modalC.create({
      component: ExPrimengPickerPage,
      componentProps: null
    });

    this.modal.onDidDismiss().then(dataReturned => {
      if (dataReturned !== null) {
        // this.dataReturned = dataReturned.data;
        // alert('Modal Sent Data :'+ dataReturned);
      }
    });

    return await this.modal.present();
  }
}
