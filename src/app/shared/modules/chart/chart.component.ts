import {
  Component,
  OnDestroy,
  ElementRef,
  Input,
  SimpleChanges,
  OnChanges,
  NgZone
} from '@angular/core';

import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import * as uuid from 'uuid';

am4core.useTheme(am4themes_animated);

interface ChartStyleOption {
  width?: string; // chart 컨테이너 width
  height?: string; // chart 컨테이너 height
}

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html'
})
export class ChartComponent implements OnDestroy, OnChanges {
  @Input() data: any[];
  @Input() style: ChartStyleOption = {
    width: '100%',
    height: '250px'
  };
  @Input() chartClose: any;
  @Input() chartMode: any = 'XYChart';

  private chart: any = null;
  private chartUuid: string = null;
  private chartDom: any = null;

  private el: ElementRef;
  constructor(el: ElementRef, private zone: NgZone) {
    this.el = el;

    window.onbeforeunload = () => {
      this.resetChart();
    };
  }

  createUuid() {
    return uuid
      .v4()
      .toString()
      .replace(/-/gi, '');
  }

  bindChart(option: ChartStyleOption) {
    const {width, height} = option;
    this.chartUuid = this.createUuid();

    this.chartDom = document.createElement('div');
    this.chartDom.id = this.chartUuid;
    this.chartDom.style.width = width;
    this.chartDom.style.height = height;

    this.el.nativeElement.appendChild(this.chartDom);
    am4core.options.commercialLicense = true;
  }

  setChart(data: any[]) {
    this.chart = am4core.createFromConfig(
      data,
      this.chartUuid,
      am4charts[this.chartMode]
    );
  }

  createChart() {
    this.zone.runOutsideAngular(() => {
      // 초기 진입시에만 bindChart
      if (!this.chart) {
        this.bindChart(this.style);
      }
      this.setChart(this.data);
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.hasOwnProperty('data') && changes.data.currentValue) {
      this.createChart();
    }

    // chart가 호출된 컴포넌트가 사라질때 ngOnDestory가 동작안하는 경우 수동으로 chart를 dispose하기 위한 용도
    if (changes.hasOwnProperty('chartClose')) {
      if (changes.chartClose.currentValue && this.chart) {
        this.resetChart();
      }
    }
  }

  resetChart() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();
        this.chart = null;
      }
    });
  }

  ionViewWillLeave() {
    this.resetChart();
  }

  ionViewDidLeave() {
    this.resetChart();
  }

  ngOnDestroy() {
    this.resetChart();
  }
}
