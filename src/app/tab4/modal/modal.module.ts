import {NgModule} from '@angular/core';
import {SharedModule} from 'src/app/shared/shared.module';
import {ExMaterialPage} from './ex-material/ex-material.page';
import {ExPrimengPage} from './ex-primeng/ex-primeng.page';

@NgModule({
  imports: [SharedModule],
  exports: [ExMaterialPage, ExPrimengPage],
  declarations: [ExMaterialPage, ExPrimengPage],
  entryComponents: [ExMaterialPage, ExPrimengPage]
})
export class ModalPageModule {}
