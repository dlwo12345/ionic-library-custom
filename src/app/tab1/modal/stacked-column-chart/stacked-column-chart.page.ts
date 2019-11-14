import {Component, Input} from '@angular/core';
import {NavParams, ModalController} from '@ionic/angular';
import {BehaviorSubject} from 'rxjs';

import * as moment from 'moment';

@Component({
  selector: 'app-stacked-column-chart',
  templateUrl: 'stacked-column-chart.page.html',
  styleUrls: ['stacked-column-chart.page.scss']
})
export class StackedColumnChartPage {
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
        value3: 3,
        value4: 3
      },
      {
        category: 'Two',
        value1: 2,
        value2: 5,
        value3: 3,
        value4: 4
      },
      {
        category: 'Three',
        value1: 3,
        value2: 5,
        value3: 4,
        value4: 4
      },
      {
        category: 'Four',
        value1: 4,
        value2: 5,
        value3: 6,
        value4: 4
      },
      {
        category: 'Five',
        value1: 3,
        value2: 5,
        value3: 4,
        value4: 4
      },
      {
        category: 'Six',
        value1: 8,
        value2: 7,
        value3: 10,
        value4: 4
      },
      {
        category: 'Seven',
        value1: 10,
        value2: 8,
        value3: 6,
        value4: 4
      }
    ];

    this.chartData.next({
      data,
      legend: {},
      colors: {
        step: 2
      },
      xAxes: [
        {
          id: 'c1',
          type: 'CategoryAxis',
          dataFields: {
            category: 'category'
          },
          renderer: {
            grid: {
              location: 0 // seems not right according to docs, but this works?
            }
          }
        }
      ],
      yAxes: [
        {
          id: 'v1',
          type: 'ValueAxis',
          min: 0,
          renderer: {
            minWidth: 35
          }
        }
      ],
      series: [
        {
          id: 's1',
          type: 'ColumnSeries',
          adapter: {
            tooltipText: function(val) {
              return val + '!';
            }
          },
          name: 'Series 1',
          dataFields: {
            categoryX: 'category',
            valueY: 'value1'
          },
          stacked: true,
          bullets: [{
            
          }]
        },
        {
          id: 's2',
          type: 'ColumnSeries',
          adapter: {
            tooltipText: function(val) {
              return val + '!';
            }
          },
          name: 'Series 2',
          dataFields: {
            categoryX: 'category',
            valueY: 'value2'
          },
          stacked: true
        },
        {
          id: 's3',
          type: 'ColumnSeries',
          adapter: {
            tooltipText: function(val) {
              return val + '!';
            }
          },
          name: 'Series 3',
          dataFields: {
            categoryX: 'category',
            valueY: 'value3'
          },
          stacked: true
        },
        {
          id: 's4',
          type: 'ColumnSeries',
          tooltupPosition: 'mouse',
          adapter: {
            tooltipText: function(val) {
              return val + '!';
            }
          },
          name: 'Series 4',
          dataFields: {
            categoryX: 'category',
            valueY: 'value4'
          },
          stacked: true
        }
      ],
      scrollbarX: {}
    });
  }
}
