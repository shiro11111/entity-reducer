import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { normalize } from 'normalizr';
import { DogUtil } from '../shared/dog/dog.util';
import { List } from '../models/list.model';
import { Dog } from '../models/dog.model';
import { dog } from '../entity/schemas';
import { NormalizedList } from '../models/normalized-list';
import { Normalized } from '../models/normalized';

@Injectable({
  providedIn: 'root'
})
export class DogService {

  constructor(private http: HttpClient) {
  }

  loadDogList(): Observable<NormalizedList> {
    return of(DogUtil.getDogList()).pipe(
      filter((list: List<Dog>) => !!(list && list.TotalCount > 0)),
      map((list: List<Dog>) => list && list.list as Dog[]),
      map((list: Dog[]) => normalize(list, [dog]))
    );
  }

  loadDogDetails(): Observable<Normalized> {
    return of(DogUtil.getDogDetails()).pipe(
      filter((details: Dog) => !!details),
      map((details: Dog) => normalize(details, dog))
    );
  }
}
