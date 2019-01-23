import { Component, OnInit } from '@angular/core';
import { AppState } from '../store/app.reducers';
import { select, Store } from '@ngrx/store';
import { LoadDogDetailsAction, LoadDogListAction } from '../store/dog/dog.actions';
import { Observable } from 'rxjs';
import { getDogListData, getStateOfDog } from '../store/dog/dog.selectors';
import { getStateOfEntity } from '../store/entity/entity.selectors';
import { Dog } from '../store/models/dog.model';

@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.css']
})
export class DogListComponent implements OnInit {

  dogIds$: Observable<number[]>;
  entities$: Observable<{ [key: string]: any }>;

  dogList$: Observable<Dog[]>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.dogIds$ = this.store.pipe(select(getStateOfDog));
    this.entities$ = this.store.pipe(select(getStateOfEntity));

    this.dogList$ = this.store.pipe(select(getDogListData));

    this.store.dispatch(new LoadDogListAction());
  }

  onLoadDogDetails(): void {
    this.store.dispatch(new LoadDogDetailsAction());
  }

}
