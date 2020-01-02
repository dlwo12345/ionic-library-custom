import {Component, OnInit} from '@angular/core';
import {Store, Select} from '@ngxs/store';
import {AddAnimal} from './store/animal.actions';
import {withLatestFrom} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {AnimalsState} from './store/animals.state';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  @Select(AnimalsState.animals) animals$: Observable<any>;
  constructor(private store: Store) {}

  ngOnInit() {}

  addAnimal({name}: any) {
    this.store
      .dispatch(new AddAnimal({name}))
      .pipe(withLatestFrom(this.animals$));
  }
}
