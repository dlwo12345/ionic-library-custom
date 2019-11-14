import {Component, Input} from '@angular/core';
import {NavParams, ModalController} from '@ionic/angular';
import {BehaviorSubject} from 'rxjs';

import * as moment from 'moment';

@Component({
  selector: 'app-heatmap-calendar',
  templateUrl: 'heatmap-calendar.page.html',
  styleUrls: ['heatmap-calendar.page.scss']
})
export class HeatMapCalendarPage {
  public chartOn = false; // refresh 시 차트 초기화 안되는 현상 대응을 위한 flag
  private chartData: BehaviorSubject<any> = new BehaviorSubject(null);
  public chartData$ = this.chartData.asObservable();

  // "value" passed in componentProps
  @Input() value: number;

  constructor(private navParams: NavParams, private modalC: ModalController) {
    // componentProps can also be accessed at construction time using NavParams
    this.chartDataInit();
  }

  /**
   * 해당 월 일수 구하기
   * @param year
   * @param month
   */
  getDayOfMonth(year, month) {
    // month 는 0 부터 시작해서..
    return 32 - new Date(year, month - 1, 32).getDate();
  }

  /**
   * 해당하는 주 주차 구하기
   */
  getWeekOfMonth(day: string) {
    const m = moment(day);
    return m.week() - m.startOf('month').week() + 1;
  }

  async createMonthObject(year, month) {
    const dayCount = await this.getDayOfMonth(year, month);
    console.log('daycount', dayCount);

    const weekArr = ['일', '월', '화', '수', '목', '금', '토'];

    const arr = [];
    for (let i = 1; i <= dayCount; i++) {
      const day = `${year}-${month}-${i < 10 ? '0' + i : i}`;
      const weekdayIndex = new Date(`${year}-${month}-${i}`).getDay();

      arr[dayCount - i] = {
        day: i, // 일
        weekOfMonth: this.getWeekOfMonth(day), // 주차
        weekday: weekArr[weekdayIndex], // 요일명
        weekdayIndex, // 요일 인덱스
        value: 0 - i * 0.01 // 값
      };
    }
    return arr;
  }

  async closeModal() {
    await this.modalC.dismiss({});
  }

  async chartDataInit() {
    this.chartOn = true;

    const handleHover = column => {
      const heatLegend = column.map.getKey('legend');
      if (!isNaN(column.dataItem.value)) {
        heatLegend.valueAxis.showTooltipAt(column.dataItem.value);
      } else {
        heatLegend.valueAxis.hideTooltip();
      }
    };

    const handleOut = column => {
      const heatLegend = column.map.getKey('legend');
      heatLegend.valueAxis.hideTooltip();
    };

    const data = await this.createMonthObject(2019, 11);
    this.chartData.next({
      data,
      maskBullets: false,
      events: {
        beforedatavalidated: function(ev) {
          ev.target.data.sort(function(a, b) {
            return b.weekdayIndex - a.weekdayIndex;
          });
        }
      },
      xAxes: [
        {
          type: 'CategoryAxis',
          dataFields: {
            category: 'weekday'
          },
          renderer: {
            grid: {
              disabled: true
            },
            inversed: true,
            minGridDistance: 30
          }
        }
      ],

      yAxes: [
        {
          type: 'CategoryAxis',
          hidden: true, // left 라벨 숨김
          maxWidth: 0, // left 벌어짐 줄이기 위한 설정
          dataFields: {
            category: 'weekOfMonth'
          },
          renderer: {
            grid: {
              disabled: true
            },
            minGridDistance: 10
          }
        }
      ],

      series: [
        {
          id: 's1',
          type: 'ColumnSeries',
          dataFields: {
            categoryX: 'weekday',
            categoryY: 'weekOfMonth',
            value: 'value'
          },
          sequencedInterpolation: true,
          defaultState: {
            transitionDuration: 500
          },
          bullets: [
            {
              type: 'LabelBullet',
              label: {
                text: '{day}',
                fontSize: 12,
                // dx: 20,
                dy: -30
              }
            },
            {
              type: 'LabelBullet',
              label: {
                text: '{weekOfMonth}시간',
                fontSize: 12
              }
            }
          ],
          columns: {
            width: '100%',
            height: '100%',
            strokeWidth: 2,
            strokeOpacity: 1,
            stroke: '#fff',
            tooltipText:
              '{weekday}, {weekOfMonth}: {value.workingValue.formatNumber("#.")}',
            events: {
              over: function(ev) {
                handleHover(ev.target);
              },
              out: function(ev) {
                handleOut(ev.target);
              }
            }
          },
          heatRules: [
            {
              target: 'columns.template',
              property: 'fill',
              min: '#ffffff',
              max: '#33a0ff'
            }
          ]
        }
      ],

      bottomAxesContainer: {
        children: [
          {
            type: 'HeatLegend',
            id: 'legend',
            forceCreate: true,
            width: '100%',
            series: 's1',
            minValue: 0,
            maxValue: 8,
            valueAxis: {
              renderer: {
                labels: {
                  fontSize: 9
                }
              }
            }
          }
        ]
      }
    });
  }
}
