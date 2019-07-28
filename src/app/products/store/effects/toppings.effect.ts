import { Injectable } from '@angular/core';

import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';

import * as toppingsActions from '../actions/toppings.action';
import * as fromServices from '../../services/toppings.service';
import { Topping } from '../../models/topping.model';

@Injectable()
export class ToppingsEffects {
  constructor(
    private actions$: Actions,
    private toppingsService: fromServices.ToppingsService,
  ) {}

  loadToppings$ = createEffect(() =>
    this.actions$.pipe(
      ofType(toppingsActions.loadToppings),
      switchMap(() => {
        return this.toppingsService.getToppings().pipe(
          map((toppings) => toppingsActions.loadToppingsSuccess({ toppings })),
          catchError((error) => of(toppingsActions.loadToppingsFail(error))),
        );
      }),
    ),
  );
}
