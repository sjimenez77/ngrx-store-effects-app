import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as fromRoot from '../../../store';
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

  @Effect()
  createPizzaSuccess$ = this.actions$
    .ofType(pizzasActions.CREATE_PIZZA_SUCCESS)
    .pipe(
      map((action: pizzasActions.CreatePizzaSuccess) => action.payload),
      map(
        (pizza) =>
          new fromRoot.Go({
            path: ['/products', pizza.id],
          }),
      ),
    );

  @Effect()
  updatePizza$ = this.actions$.ofType(pizzasActions.UPDATE_PIZZA).pipe(
    map((action: pizzasActions.UpdatePizza) => action.payload),
    switchMap((pizza) => {
      return this.pizzaService.updatePizza(pizza).pipe(
        map((pizza) => new pizzasActions.UpdatePizzaSuccess(pizza)),
        catchError((error) => of(new pizzasActions.UpdatePizzaFail(error))),
      );
    }),
  );

  @Effect()
  removePizza$ = this.actions$.ofType(pizzasActions.REMOVE_PIZZA).pipe(
    map((action: pizzasActions.RemovePizza) => action.payload),
    switchMap((pizza) => {
      return this.pizzaService.removePizza(pizza).pipe(
        map(() => new pizzasActions.RemovePizzaSuccess(pizza)),
        catchError((error) => of(new pizzasActions.RemovePizzaFail(error))),
      );
    }),
  );

  @Effect()
  handlePizzaSuccess$ = this.actions$
    .ofType(
      pizzasActions.UPDATE_PIZZA_SUCCESS,
      pizzasActions.REMOVE_PIZZA_SUCCESS,
    )
    .pipe(
      map((pizza) => {
        return new fromRoot.Go({
          path: ['/products'],
        });
      }),
    );
}
