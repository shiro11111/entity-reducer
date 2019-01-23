import {PayloadAction} from '../models/payload-action.model';
import {dog} from './schemas';

export interface EntityState {
  entities: { [key: string]: any };
}

const initialState: EntityState = {
  entities: {
    dog: {}
  }
};

export function entityReducer(state = initialState, action: PayloadAction) {
  if (action && action.payload && action.payload.entities) {
    let entity = {};

    const keys = Object.keys(initialState.entities); //['dog']
    keys.forEach((item: string) => {
      entity[item] = {...entity[item]};
    });
    const dogKeys = Object.keys(initialState.entities.dog);
    dogKeys.forEach((dog: string) => {
      entity[dog] = {...entity[dog]};
    });

    entity = {...entity[item], ...entity[dog]};
  }
  return state;
}

export const getEntities = (state: EntityState) => state.entities;
