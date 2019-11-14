import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {Tab1Page} from './tab1.page';
import {SharedModule} from '../shared/shared.module';
import {ModalPageModule} from './modal/modal.module';

@NgModule({
  imports: [
    SharedModule,
    ModalPageModule,
    RouterModule.forChild([{path: '', component: Tab1Page}])
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
