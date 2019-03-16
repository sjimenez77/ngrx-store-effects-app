import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';
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

  @Effect()
  loadToppings$ = this.actions$.pipe(
    ofType(toppingsActions.LOAD_TOPPINGS),
    switchMap(() => {
      return this.toppingsService.getToppings().pipe(
        map(
          (toppings) =>
            new toppingsActions.LoadToppingsSuccess(<Topping[]>toppings),
        ),
        catchError((error) => of(new toppingsActions.LoadToppingsFail(error))),
      );
    }),
  );
}
