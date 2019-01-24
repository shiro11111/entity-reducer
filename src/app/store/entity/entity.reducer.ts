import { PayloadAction } from '../models/payload-action.model';

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
      const actionEntity = action.payload.entities[item] || {};
      const stateEntity = state.entities[item] || {};
      const newEntitites = {};
      const ids = Object.keys(actionEntity);

      ids.forEach((id: string) => {
        newEntitites[id] = { ...(stateEntity[id] || {}), ...(actionEntity[id] || {}) };
      });

      entity[item] = { ...actionEntity, ...stateEntity, ...newEntitites };
    });

    return {
      ...state,
      entities: entity
    };
  }
  return state;
}

export const getEntities = (state: EntityState) => state.entities;
