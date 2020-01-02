import {Animal} from './models/animal.model';

export class AddAnimal {
  static readonly type = '[Zoo] Add Animal';
  constructor(public payload: Animal) {}
}
