import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Tab3Page} from './tab3.page';
import {NgxsModule} from '@ngxs/store';
import {AnimalsState} from './store/animals.state';
import {Tab3ViewPage} from './views/tab3-view.page';
import {ProductsState} from './store';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{path: '', component: Tab3Page}]),
    NgxsModule.forRoot(ProductsState)
  ],
  declarations: [Tab3Page, Tab3ViewPage]
})
export class Tab3PageModule {}
