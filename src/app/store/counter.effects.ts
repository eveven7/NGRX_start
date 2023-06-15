import { Actions, createEffect, ofType } from '@ngrx/effects';
import { decrement, increment, init, set } from './counter.actions';
import { switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCount } from './counter.selectors';
import { of } from 'rxjs';
@Injectable()
export class CounterEffects {
  //loads data from localstorage

  loadCount = createEffect(() =>
    this.actions$.pipe(
      ofType(init),
      switchMap(() => {
        const storedCounter = localStorage.getItem('count');//loads data
        if (storedCounter) {
          return of(set({ value: +storedCounter }));// new action object
        }
        return of(set({ value: 0 }));
      })
    )
  );

  saveCount = createEffect(
    () =>
      this.actions$.pipe(
        ofType(increment, decrement),
        withLatestFrom(this.store.select(selectCount)), // operator allows you to combine the latest emitted value from one observable with the latest values from other observables
        tap(([action, counter]) => {
          console.log(action);
          localStorage.setItem('count', counter.toString());
        }) //emits a new value whenever the action is dispatched
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private store: Store<{ counter: number }>
  ) {}
}
