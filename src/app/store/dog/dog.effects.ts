import { DogService } from './dog.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { catchError, map, switchMap } from 'rxjs/operators';
import { NormalizedList } from '../models/normalized-list';
import {
  LoadDogDetailsFailAction,
  LoadDogDetailsSuccessAction,
  LoadDogListFailAction,
  LoadDogListSuccessAction
} from './dog.actions';
import { HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { Normalized } from '../models/normalized';

@Injectable()
export class DogEffects {
  constructor(private actions$: Actions,
              private service: DogService) {
  }

  @Effect() loadDogList$ = this.actions$.pipe(
    ofType('LOAD_DOG_LIST'),
    switchMap(() => this.service.loadDogList().pipe(
      map((res: NormalizedList) => new LoadDogListSuccessAction(res)),
      catchError((error: HttpErrorResponse) => of(new LoadDogListFailAction(error)))
    ))
  );

  @Effect() loadDogDetails$ = this.actions$.pipe(
    ofType('LOAD_DOG_DETAILS'),
    switchMap(() => this.service.loadDogDetails().pipe(
      map((res: Normalized) => new LoadDogDetailsSuccessAction(res)),
      catchError((error: HttpErrorResponse) => of(new LoadDogDetailsFailAction(error)))
    ))
  );

}
