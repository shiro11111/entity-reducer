import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { NormalizedList } from '../models/normalized-list';
import { Normalized } from '../models/normalized';

export const LOAD_DOG_LIST = 'LOAD_DOG_LIST';
export const LOAD_DOG_LIST_SUCCESS = 'LOAD_DOG_LIST_SUCCESS';
export const LOAD_DOG_LIST_FAIL = 'LOAD_DOG_LIST_FAIL';

export const LOAD_DOG_DETAILS = 'LOAD_DOG_DETAILS';
export const LOAD_DOG_DETAILS_SUCCESS = 'LOAD_DOG_DETAILS_SUCCESS';
export const LOAD_DOG_DETAILS_FAIL = 'LOAD_DOG_DETAILS_FAIL';

export class LoadDogListAction implements Action {
  readonly type = LOAD_DOG_LIST;

  constructor(public payload: any = null) {
  }
}

export class LoadDogListSuccessAction implements Action {
  readonly type = LOAD_DOG_LIST_SUCCESS;

  constructor(public payload: NormalizedList) {
  }
}

export class LoadDogListFailAction implements Action {
  readonly type = LOAD_DOG_LIST_FAIL;

  constructor(public payload: HttpErrorResponse) {
  }
}

export class LoadDogDetailsAction implements Action {
  readonly type = LOAD_DOG_DETAILS;

  constructor(public payload: any = null) {
  }
}

export class LoadDogDetailsSuccessAction implements Action {
  readonly type = LOAD_DOG_DETAILS_SUCCESS;

  constructor(public payload: Normalized) {
  }
}

export class LoadDogDetailsFailAction implements Action {
  readonly type = LOAD_DOG_DETAILS_FAIL;

  constructor(public payload: HttpErrorResponse) {
  }
}

export type DogActions = LoadDogListAction |
  LoadDogListSuccessAction |
  LoadDogListFailAction |
  LoadDogDetailsAction |
  LoadDogDetailsSuccessAction |
  LoadDogDetailsFailAction;
