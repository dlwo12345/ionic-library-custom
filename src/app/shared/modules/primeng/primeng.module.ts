import {NgModule} from '@angular/core';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';

@NgModule({
  imports: [InputTextModule, ButtonModule, DropdownModule],
  exports: [InputTextModule, ButtonModule, DropdownModule]
})
export class PrimengModule {}
