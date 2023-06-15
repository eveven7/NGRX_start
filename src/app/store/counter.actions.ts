import { Action, createAction, props } from '@ngrx/store';

export const init = createAction('[Counter] Init');//triger side effect

export const set = createAction('[Counter] Set', props<{ value: number }>());//dispach once side effect is done

export const increment = createAction(
  '[Counter] Increment',
  props<{ value: number }>() // data atachable to the action
);

export const decrement = createAction(
  '[Counter] Decrement',
  props<{ value: number }>() // data atachable to the action
);

// export const INCREMENT = '[Counter] Increment'
// export class IncrementAction implements Action {
//   readonly type = INCREMENT;

//   constructor(public value: number) {}
// }

// export type CounterActions = IncrementAction;
