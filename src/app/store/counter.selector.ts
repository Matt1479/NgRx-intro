import { State } from './counter.reducer';

// #3 define selectors

export const counter = (state: State) => state.counter;
