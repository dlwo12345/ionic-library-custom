import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {ModalPageModule} from './modal/modal.module';
import {Tab4Page} from './tab4.page';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([{path: '', component: Tab4Page}]),
    ModalPageModule
  ],
  declarations: [Tab4Page],
  entryComponents: []
})
export class Tab4PageModule {}
