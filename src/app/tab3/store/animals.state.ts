import {AnimalsStateModel, Animal} from './models/animal.model';
import {State, Selector, Action, StateContext} from '@ngxs/store';
import {AddAnimal} from './animal.actions';

@State<AnimalsStateModel>({
  name: 'animalsState',
  defaults: {
    animals: []
  }
})
export class AnimalsState {
  constructor() {}

  @Selector()
  static animals(state: AnimalsStateModel) {
    return state.animals;
  }

  @Action(AddAnimal)
  AddAnimal(
    {patchState, getState}: StateContext<AnimalsStateModel>,
    {payload}: any
  ) {
    patchState({
      animals: [...getState().animals, payload]
    });
  }
}
