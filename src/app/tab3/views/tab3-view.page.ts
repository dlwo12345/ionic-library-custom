import {Component, Output, EventEmitter, Input} from '@angular/core';
import {Animal} from '../store/animal.model';

@Component({
  selector: 'app-tab3-view',
  templateUrl: 'tab3-view.page.html',
  styleUrls: ['tab3-view.page.scss']
})
export class Tab3ViewPage {
  @Input() animals: Animal[];
  @Output() addAnimal = new EventEmitter<Animal>();
  constructor() {}

  addAnimalEmit(name: string) {
    this.addAnimal.emit({name});
  }
}
