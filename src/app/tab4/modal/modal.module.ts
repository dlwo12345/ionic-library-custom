import {NgModule} from '@angular/core';
import {SharedModule} from 'src/app/shared/shared.module';
import {ExMaterialPage} from './ex-material/ex-material.page';
import {ExPrimengPage} from './ex-primeng/ex-primeng.page';
import {ExMaterialPickerPage} from './ex-material-picker/ex-material-picker.page';
import {ExPrimengPickerPage} from './ex-primeng-picker/ex-primeng-picker.page';
import { ExMaterialPickerHeaderPage } from './ex-material-picker-header/ex-material-picker-header.page';

@NgModule({
  imports: [SharedModule],
  exports: [
    ExMaterialPage,
    ExPrimengPage,
    ExMaterialPickerPage,
    ExPrimengPickerPage,
  ],
  declarations: [
    ExMaterialPage,
    ExPrimengPage,
    ExMaterialPickerPage,
    ExPrimengPickerPage,
    ExMaterialPickerHeaderPage
  ],
  entryComponents: [
    ExMaterialPage,
    ExPrimengPage,
    ExMaterialPickerPage,
    ExPrimengPickerPage,
    ExMaterialPickerHeaderPage
  ]
})
export class ModalPageModule {}
