import { createSelector } from '@ngrx/store';
import { getDogState } from '../app.reducers';
import * as fromReducer from './dog.reducer';
import { getStateOfEntity } from '../entity/entity.selectors';
import { denormalize } from 'normalizr';
import { dog } from '../entity/schemas';

export const getStateOfDog = createSelector(getDogState, fromReducer.getDogList);

export const getDogListData = createSelector(
  getStateOfEntity,
  getStateOfDog,
  (entities: { [key: string]: any }, dogIds: number[]) => denormalize(dogIds, [dog], entities)
);
