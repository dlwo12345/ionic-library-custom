import {Component, Input} from '@angular/core';
import {NavParams, ModalController} from '@ionic/angular';
import {BehaviorSubject} from 'rxjs';

import * as moment from 'moment';

@Component({
  selector: 'app-stacked-bar-percent-chart',
  templateUrl: 'stacked-bar-percent-chart.page.html',
  styleUrls: ['stacked-bar-percent-chart.page.scss']
})
export class StackedBarPercentChartPage {
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
        category: 'One',
        value1: 1,
        value2: 5,
        value3: 3
      },
      {
        category: 'Two',
        value1: 2,
        value2: 5,
        value3: 3
      },
      {
        category: 'Three',
        value1: 3,
        value2: 5,
        value3: 4
      },
      {
        category: 'Four',
        value1: 4,
        value2: 5,
        value3: 6
      },
      {
        category: 'Five',
        value1: 3,
        value2: 5,
        value3: 4
      },
      {
        category: 'Six',
        value1: 2,
        value2: 13,
        value3: 1
      }
    ];

    this.chartData.next({
      data,
      colors: {
        step: 2
      },
      legend: {},
      xAxes: [
        {
          type: 'ValueAxis',
          min: 0,
          max: 100,
          calculateTotals: true,
          renderer: {
            minWidth: 50
          }
        }
      ],
      yAxes: [
        {
          type: 'CategoryAxis',
          dataFields: {
            category: 'category'
          }
        }
      ],
      series: [
        {
          type: 'ColumnSeries',
          columns: {
            template: {
              tooltipText: '{name}: {valueX.totalPercent.formatNumber("#.00")}%'
            }
          },
          name: 'Series 1',
          dataFields: {
            categoryY: 'category',
            valueX: 'value1',
            valueXShow: 'totalPercent'
          },
          bullets: [
            {
              type: 'LabelBullet',
              interactionsEnabled: false,
              locationX: 0.5,
              label: {
                text: '{valueX.totalPercent.formatNumber("#.00")}%',
                fill: '#fff'
              }
            }
          ]
        },
        {
          type: 'ColumnSeries',
          columns: {
            template: {
              width: '80%',
              tooltipText: '{name}: {valueX.totalPercent.formatNumber("#.00")}%'
            }
          },
          name: 'Series 2',
          dataFields: {
            categoryY: 'category',
            valueX: 'value2',
            valueXShow: 'totalPercent'
          },
          dataItems: {
            template: {
              locations: {
                categoryX: 0.5
              }
            }
          },
          stacked: true,
          tooltip: {
            pointerOrientation: 'vertical'
          },
          bullets: [
            {
              type: 'LabelBullet',
              interactionsEnabled: false,
              locationX: 0.5,
              label: {
                text: '{valueX.totalPercent.formatNumber("#.00")}%',
                fill: '#fff'
              }
            }
          ]
        },
        {
          type: 'ColumnSeries',
          columns: {
            template: {
              width: '80%',
              tooltipText: '{name}: {valueX.totalPercent.formatNumber("#.00")}%'
            }
          },
          name: 'Series 3',
          dataFields: {
            categoryY: 'category',
            valueX: 'value3',
            valueXShow: 'totalPercent'
          },
          dataItems: {
            template: {
              locations: {
                categoryX: 0.5
              }
            }
          },
          stacked: true,
          tooltip: {
            pointerOrientation: 'vertical'
          },
          bullets: [
            {
              type: 'LabelBullet',
              interactionsEnabled: false,
              locationX: 0.5,
              label: {
                text: '{valueX.totalPercent.formatNumber("#.00")}%',
                fill: '#fff'
              }
            }
          ]
        }
      ]
    });
  }
}
