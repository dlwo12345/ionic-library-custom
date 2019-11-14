import {Component, Input} from '@angular/core';
import {NavParams, ModalController} from '@ionic/angular';
import {BehaviorSubject} from 'rxjs';

import * as moment from 'moment';

@Component({
  selector: 'app-column-chart',
  templateUrl: 'column-chart.page.html',
  styleUrls: ['column-chart.page.scss']
})
export class ColumnChartPage {
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
        stndDate: 1,
        avgGnrtTime: 1
      }
    ];
    // const data = this.myData.dailyStatModelList.map(response => {
    //   return {
    //     stndDate: Number(response.stndDate.slice(response.stndDate.length - 2)),
    //     avgGnrtTime: response.avgGnrtTime
    //   };
    // });

    this.chartData.next({
      data,
      xAxes: [
        {
          type: 'CategoryAxis',
          dataFields: {
            category: 'stndDate'
          },
          renderer: {
            grid: {
              disabled: true
            },
            minGridDistance: 30
          },
          fontSize: 12,
          extraMin: 0.2,
          extraMax: 0.2
        }
      ],
      yAxes: [
        {
          type: 'ValueAxis',
          min: 0,
          max: 10,
          fontSize: 12,
          renderer: {
            minGridDistance: 20
          }
        }
      ],
      series: [
        {
          type: 'ColumnSeries',
          dataFields: {
            valueY: 'avgGnrtTime',
            categoryX: 'stndDate'
          },
          name: 'AvgGnrtTime',
          columns: {
            template: {
              tooltipText: '{categoryX}: [bold]{valueY}[/]',
              fillOpacity: 0.8,
              width: 6,
              fill: {
                type: 'LinearGradient',
                rotation: 270,
                stops: [
                  {
                    color: '#00afff'
                  },
                  {
                    color: '#0070ff'
                  }
                ]
              }
            }
          }
        }
      ],
      chartContainer: {
        children: [
          {
            type: 'Container',
            layout: 'absolute',
            paddingBottom: 15,
            callback: function() {
              this.toBack();
            },
            width: '100%',
            children: [
              {
                type: 'Label',
                text: '시간',
                fontWeight: 600,
                fontSize: 12,
                align: 'left',
                fill: '#999',
                paddingLeft: -24
              },
              {
                type: 'Label',
                text: '일',
                fontWeight: 600,
                align: 'right',
                marginTop: -100,
                // marginRight: -5,
                fontSize: 12,
                fill: '#999'
              }
            ]
          }
        ]
      }
    });
  }
}
