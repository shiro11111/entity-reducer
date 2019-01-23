import { Action } from '@ngrx/store';

// made to avoid **property payload does not exist in type Action ** error in entitiesReducer
// see https://github.com/ngrx/platform/issues/31 for more info
export interface PayloadAction extends Action {
  payload: any;
}
