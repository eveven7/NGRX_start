import { createReducer, on, Action } from '@ngrx/store';
import { CounterActions, INCREMENT, IncrementAction } from './counter.actions';
// import { increment } from './counter.actions';

const initialState = 0;
// export const counterReducer = createReducer(
//   initialState,
//   on(increment, (state, action)=> state + action.value)//listen to the state
// )

export function counterReducer(state = initialState, action: CounterActions | Action) {
  if (action.type === INCREMENT) {
    return state + (action as IncrementAction).value;
  }
  return state;
}
