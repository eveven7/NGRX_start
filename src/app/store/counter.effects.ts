import { Actions, createEffect, ofType } from '@ngrx/effects';
import { decrement, increment } from './counter.actions';
import { tap } from 'rxjs/operators';

export class CounterEffects {
  saveCount = createEffect(
    () =>
      this.actions$.pipe(
        ofType(increment, decrement),
        tap((action) => {
          console.log(action);
          localStorage.setItem('count', action.value.toString());
        }) //emits a new value whenever the action is dispatched
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions) {}
}
