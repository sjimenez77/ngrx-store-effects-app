import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as pizzasActions from '../actions/pizzas.action';
import * as fromServices from '../../services';

@Injectable()
export class PizzasEffects {
  constructor(
    private actions$: Actions,
    private pizzaService: fromServices.PizzasService,
  ) {}

  @Effect()
  loadPizzas$ = this.actions$.ofType(pizzasActions.LOAD_PIZZAS).pipe(
    switchMap(() => {
      return this.pizzaService.getPizzas().pipe(
        map((pizzas) => new pizzasActions.LoadPizzasSuccess(pizzas)),
        catchError((error) => of(new pizzasActions.LoadPizzasFail(error))),
      );
    }),
  );

  @Effect()
  createPizza$ = this.actions$.ofType(pizzasActions.CREATE_PIZZA).pipe(
    map((action: pizzasActions.CreatePizza) => action.payload),
    switchMap((pizza) => {
      return this.pizzaService.createPizza(pizza).pipe(
        map((pizza) => new pizzasActions.CreatePizzaSuccess(pizza)),
        catchError((error) => of(new pizzasActions.CreatePizzaFail(error))),
      );
    }),
  );
}
