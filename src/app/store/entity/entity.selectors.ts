import { createSelector } from '@ngrx/store';
import { getEntityState } from '../app.reducers';
import * as fromReducer from './entity.reducer';

export const getStateOfEntity = createSelector(getEntityState, fromReducer.getEntities);
