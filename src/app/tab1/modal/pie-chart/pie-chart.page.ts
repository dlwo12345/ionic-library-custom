import {Component, Input} from '@angular/core';
import {NavParams, ModalController} from '@ionic/angular';
import {BehaviorSubject} from 'rxjs';

import * as moment from 'moment';

@Component({
  selector: 'app-pie-chart',
  templateUrl: 'pie-chart.page.html',
  styleUrls: ['pie-chart.page.scss']
})
export class PieChartPage {
  public chartOn = false; // refresh 시 차트 초기화 안되는 현상 대응을 위한 flag
  private chartData: BehaviorSubject<any> = new BehaviorSubject(null);
  public chartData$ = this.chartData.asObservable();

  // "value" passed in componentProps
  @Input() value: number;

  constructor(private navParams: NavParams, private modalC: ModalController) {
    // componentProps can also be accessed at construction time using NavParams
    this.chartDataInit();
  }

  async closeModal() {
    await this.modalC.dismiss({});
  }

  chartDataInit() {
    this.chartOn = true;
    const data = [
      {
        country: 'Lithuania',
        litres: 501.9
      },
      {
        country: 'Czech Republic',
        litres: 301.9
      },
      {
        country: 'Ireland',
        litres: 201.1
      },
      {
        country: 'Germany',
        litres: 165.8
      },
      {
        country: 'Australia',
        litres: 139.9
      },
      {
        country: 'Austria',
        litres: 128.3
      },
      {
        country: 'UK',
        litres: 99
      },
      {
        country: 'Belgium',
        litres: 60
      },
      {
        country: 'The Netherlands',
        litres: 50
      }
    ];

    this.chartData.next({
      data,
      series: [
        {
          type: 'PieSeries',
          dataFields: {
            value: 'litres',
            category: 'country'
          }
        }
      ]
    });
  }
}
