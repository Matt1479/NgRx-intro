import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as actions from '../store/counter.actions';
import { State } from '../store/counter.reducer';
import { counter } from '../store/counter.selector';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  count$!: Observable<number>;

  // #4 Inject the store
  constructor(private store: Store<State>) {
    // #5 select the reducer
    this.count$ = this.store.select(counter);
  }

  // #6 dispatch actions
  increment() {
    this.store.dispatch(actions.Increment());
  }

  decrement() {
    this.store.dispatch(actions.Decrement());
  }

  reset() {
    this.store.dispatch(actions.Reset());
  }
}
