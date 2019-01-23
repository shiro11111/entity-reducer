import { ActionReducerMap } from '@ngrx/store';
import * as fromDogState from '../store/dog/dog.reducer';
import * as fromEntitiesState from '../store/entity/entity.reducer';
import { dogReducer } from './dog/dog.reducer';
import { entityReducer } from './entity/entity.reducer';

export interface AppState {
  dogState: fromDogState.DogState;
  entities: fromEntitiesState.EntityState;
}

export const reducers: ActionReducerMap<AppState> = {
  dogState: dogReducer,
  entities: entityReducer
};

export const getDogState = (state: AppState) => state.dogState;
export const getEntityState = (state: AppState) => state.entities;
