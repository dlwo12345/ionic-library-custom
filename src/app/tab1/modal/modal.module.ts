import {NgModule} from '@angular/core';
import {SharedModule} from 'src/app/shared/shared.module';
import {ChartModule} from 'src/app/shared/modules/chart/chart.module';
import {HeatMapCalendarPage} from './heatmap-calendar/heatmap-calendar.page';
import {ColumnChartPage} from './column-chart/column-chart.page';
import {StackedColumnChartPage} from './stacked-column-chart/stacked-column-chart.page';
import {StackedBarPercentChartPage} from './stacked-bar-percent-chart/stacked-bar-percent-chart.page';
import {PieChartPage} from './pie-chart/pie-chart.page';

@NgModule({
  imports: [SharedModule, ChartModule],
  exports: [
    HeatMapCalendarPage,
    ColumnChartPage,
    StackedColumnChartPage,
    StackedBarPercentChartPage,
    PieChartPage
  ],
  declarations: [
    HeatMapCalendarPage,
    ColumnChartPage,
    StackedColumnChartPage,
    StackedBarPercentChartPage,
    PieChartPage
  ],
  entryComponents: [
    HeatMapCalendarPage,
    ColumnChartPage,
    StackedColumnChartPage,
    StackedBarPercentChartPage,
    PieChartPage
  ]
})
export class ModalPageModule {}
