import {Component} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {HeatMapCalendarPage} from './modal/heatmap-calendar/heatmap-calendar.page';
import {ColumnChartPage} from './modal/column-chart/column-chart.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  modal: any;
  constructor(private modalC: ModalController) {}

  /**
   * heatmap-calendar 팝업 출력
   */
  async showHeatMapCalendarModal() {
    this.modal = await this.modalC.create({
      component: HeatMapCalendarPage,
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
   * 컬럼차트 예제 출력
   */
  async showColumnChartModal() {
    this.modal = await this.modalC.create({
      component: ColumnChartPage,
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
