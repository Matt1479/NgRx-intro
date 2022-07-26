import { createAction } from '@ngrx/store';

// #0 define actions to express/describe events

export enum AppActionType {
  Increment = '[Counter Component] Increment a number',
  Decrement = '[Counter Component] Decrement a number',
  Reset = '[Counter Component] Reset a number to initial state',
}

export const Increment = createAction(AppActionType.Increment);

export const Decrement = createAction(AppActionType.Decrement);

export const Reset = createAction(AppActionType.Reset);
