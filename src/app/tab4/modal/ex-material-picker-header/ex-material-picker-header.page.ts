import {
  Component,
  Host,
  Inject,
  ChangeDetectorRef,
  OnDestroy
} from '@angular/core';
import {Subject} from 'rxjs';
import {
  MatCalendar,
  DateAdapter,
  MatDateFormats,
  MAT_DATE_FORMATS
} from '@angular/material';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-ex-material-picker-header',
  templateUrl: 'ex-material-picker-header.page.html',
  styleUrls: ['ex-material-picker-header.page.scss']
})
export class ExMaterialPickerHeaderPage implements OnDestroy {
  private _destroyed = new Subject<void>();

  constructor(
    private _calendar: MatCalendar<any>,
    private _dateAdapter: DateAdapter<any>,
    @Inject(MAT_DATE_FORMATS) private _dateFormats: MatDateFormats,
    cdr: ChangeDetectorRef
  ) {
    _calendar.stateChanges.pipe(takeUntil(this._destroyed)).subscribe(() => {
      return cdr.markForCheck();
    });
  }

  ngOnDestroy() {
    this._destroyed.next();
    this._destroyed.complete();
  }

  get periodLabel() {
    return this._dateAdapter
      .format(
        this._calendar.activeDate,
        this._dateFormats.display.monthYearLabel
      )
      .toLocaleUpperCase();
  }

  previousClicked(mode: 'month' | 'year') {
    this._calendar.activeDate =
      mode === 'month'
        ? this._dateAdapter.addCalendarMonths(this._calendar.activeDate, -1)
        : this._dateAdapter.addCalendarYears(this._calendar.activeDate, -1);
  }

  nextClicked(mode: 'month' | 'year') {
    this._calendar.activeDate =
      mode === 'month'
        ? this._dateAdapter.addCalendarMonths(this._calendar.activeDate, 1)
        : this._dateAdapter.addCalendarYears(this._calendar.activeDate, 1);
  }

  changeViewMode(mode: 'month' | 'multi-year' | 'year') {
    this._calendar.currentView = mode;
  }
}
