import {Component, Input, ViewChild, AfterViewInit} from '@angular/core';
import {NavParams, ModalController} from '@ionic/angular';

import {
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS
} from '@angular/material-moment-adapter';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE
} from '@angular/material/core';
import {MatDatepicker} from '@angular/material/datepicker';

import * as moment from 'moment';
import {Moment} from 'moment';
import {FormGroup, FormBuilder} from '@angular/forms';
import {ExMaterialPickerHeaderPage} from '../ex-material-picker-header/ex-material-picker-header.page';
import {Subject} from 'rxjs';

// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
export const MY_FORMATS = {
  parse: {
    dateInput: 'YYYY/MM'
  },
  display: {
    dateInput: 'YYYY/MM',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  }
};

@Component({
  selector: 'app-ex-material-picker',
  templateUrl: 'ex-material-picker.page.html',
  styleUrls: ['ex-material-picker.page.scss'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS}
  ]
})
export class ExMaterialPickerPage implements AfterViewInit {
  exMaterialPickerHeaderPage = ExMaterialPickerHeaderPage;

  private _destroyed = new Subject<void>();

  @ViewChild('dp', {static: false}) dp: any;
  // "value" passed in componentProps
  @Input() value: number;

  form: FormGroup;

  startView = 'year';

  constructor(
    private navParams: NavParams,
    private modalC: ModalController,
    private formBuilder: FormBuilder
  ) {
    // componentProps can also be accessed at construction time using NavParams
    this.createForm();
  }

  createForm() {
    this.form = this.formBuilder.group({
      date: [moment()]
    });
  }

  async closeModal() {
    await this.modalC.dismiss({});
  }

  ngAfterViewInit() {}

  ngOnDestroy() {
    this._destroyed.next();
    this._destroyed.complete();
  }

  chosenYearHandler(normalizedYear: Moment, datepicker: MatDatepicker<Moment>) {
    const date = this.form.get('date');
    const ctrlValue = this.form.get('date').value;
    ctrlValue.year(normalizedYear.year());
    this.form.get('date').patchValue(moment(ctrlValue));
    datepicker.close();
  }

  chosenMonthHandler(
    normalizedMonth: Moment,
    datepicker: MatDatepicker<Moment>
  ) {
    const date = this.form.get('date');
    const ctrlValue = this.form.get('date').value;
    ctrlValue.month(normalizedMonth.month());
    this.form.get('date').patchValue(moment(ctrlValue));
    datepicker.close();
  }

  dpOpen(target: 'year' | 'multi-year' | 'month', dp) {
    this.startView = target;
    dp.open();
  }

  getValue() {
    const a = this.form.get('date').value;
    return a;
  }
}
