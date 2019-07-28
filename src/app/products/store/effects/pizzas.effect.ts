import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import * as fromRoot from '../../../store';
import * as fromServices from '../../services';
import * as pizzasActions from '../actions/pizzas.action';

@Injectable()
export class PizzasEffects {
  constructor(
    private actions$: Actions,
    private pizzaService: fromServices.PizzasService,
  ) {}

  loadPizzas$ = createEffect(() =>
    this.actions$.pipe(
      ofType(pizzasActions.loadPizzas),
      switchMap(() => {
        return this.pizzaService.getPizzas().pipe(
          map((pizzas) => pizzasActions.loadPizzasSuccess({ pizzas })),
          catchError((error) => of(pizzasActions.loadPizzasFail({ error }))),
        );
      }),
    ),
  );

  createPizza$ = createEffect(() =>
    this.actions$.pipe(
      ofType(pizzasActions.createPizza),
      mergeMap(({ pizza }) => {
        return this.pizzaService.createPizza(pizza).pipe(
          map((pizza) => pizzasActions.createPizzaSuccess({ pizza })),
          catchError((error) => of(pizzasActions.createPizzaFail({ error }))),
        );
      }),
    ),
  );

  createPizzaSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(pizzasActions.createPizzaSuccess),
      map(({ pizza }) => {
        return fromRoot.go({
          path: ['/products', pizza.id],
        });
      }),
    ),
  );

  updatePizza$ = createEffect(() =>
    this.actions$.pipe(
      ofType(pizzasActions.updatePizza),
      mergeMap(({ pizza }) => {
        return this.pizzaService.updatePizza(pizza).pipe(
          map((pizza) => pizzasActions.updatePizzaSuccess({ pizza })),
          catchError((error) => of(pizzasActions.updatePizzaFail({ error }))),
        );
      }),
    ),
  );

  removePizza$ = createEffect(() =>
    this.actions$.pipe(
      ofType(pizzasActions.removePizza),
      mergeMap(({ pizza }) => {
        return this.pizzaService.removePizza(pizza).pipe(
          map(() => pizzasActions.removePizzaSuccess({ pizza })),
          catchError((error) => of(pizzasActions.removePizzaFail({ error }))),
        );
      }),
    ),
  );

  handlePizzaSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        pizzasActions.UPDATE_PIZZA_SUCCESS,
        pizzasActions.REMOVE_PIZZA_SUCCESS,
      ),
      map(({ pizza }) => {
        return fromRoot.go({
          path: ['/products'],
        });
      }),
    ),
  );
}
