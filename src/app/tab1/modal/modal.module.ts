import {NgModule} from '@angular/core';
import {SharedModule} from 'src/app/shared/shared.module';
import {ChartModule} from 'src/app/shared/modules/chart/chart.module';
import {HeatMapCalendarPage} from './heatmap-calendar/heatmap-calendar.page';
import {ColumnChartPage} from './column-chart/column-chart.page';

@NgModule({
  imports: [SharedModule, ChartModule],
  exports: [HeatMapCalendarPage, ColumnChartPage],
  declarations: [HeatMapCalendarPage, ColumnChartPage],
  entryComponents: [HeatMapCalendarPage, ColumnChartPage]
})
export class ModalPageModule {}
