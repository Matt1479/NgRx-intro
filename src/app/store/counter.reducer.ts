import { Action, ActionReducerMap, createReducer, on } from '@ngrx/store';
import { Increment, Decrement, Reset } from './counter.actions';

export interface State {
  counter: number;
}

export const initialState = 0;

// #1 define reducers to manage the state

export const reducers: ActionReducerMap<State> = {
  counter: createReducer<number, Action>(
    initialState,
    on(Increment, (state) => {
      let copiedState = state;
      copiedState += 1;
      return copiedState;
    }),
    on(Decrement, (state) => {
      let copiedState = state;
      copiedState -= 1;
      return copiedState;
    }),
    on(Reset, (state) => {
      let copiedState = state;
      copiedState = 0;
      return copiedState;
    })
  ),
};
