import {NgModule} from '@angular/core';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {CalendarModule} from 'primeng/calendar';

@NgModule({
  imports: [InputTextModule, ButtonModule, DropdownModule, CalendarModule],
  exports: [InputTextModule, ButtonModule, DropdownModule, CalendarModule]
})
export class PrimengModule {}
