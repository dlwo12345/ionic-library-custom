import {NgModule} from '@angular/core';
import {SharedModule} from 'src/app/shared/shared.module';
import {ChartModule} from 'src/app/shared/modules/chart/chart.module';
import {HeatMapCalendarPage} from './heatmap-calendar/heatmap-calendar.page';
import {ColumnChartPage} from './column-chart/column-chart.page';
import {StackedColumnChartPage} from './stacked-column-chart/stacked-column-chart.page';

@NgModule({
  imports: [SharedModule, ChartModule],
  exports: [HeatMapCalendarPage, ColumnChartPage, StackedColumnChartPage],
  declarations: [HeatMapCalendarPage, ColumnChartPage, StackedColumnChartPage],
  entryComponents: [
    HeatMapCalendarPage,
    ColumnChartPage,
    StackedColumnChartPage
  ]
})
export class ModalPageModule {}
