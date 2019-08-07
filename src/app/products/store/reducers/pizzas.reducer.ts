import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as fromPizzas from '../actions/pizzas.action';
import { Pizza } from '../../models/pizza.model';
import { createReducer, on } from '@ngrx/store';

export interface PizzaState extends EntityState<Pizza> {
  loaded: boolean;
  loading: boolean;
}

export const adapter: EntityAdapter<Pizza> = createEntityAdapter<Pizza>();

export const initialState: PizzaState = adapter.getInitialState({
  loaded: false,
  loading: false,
});

export const reducer = createReducer(
  initialState,
  on(fromPizzas.loadPizzas, (state) => ({
    ...state,
    loading: true,
  })),
  on(fromPizzas.loadPizzasSuccess, (state, { pizzas }) => {
    return adapter.addAll(pizzas, {
      ...state,
      loading: false,
      loaded: true,
    });
  }),
  on(fromPizzas.loadPizzasFail, (state) => ({
    ...state,
    loading: false,
    loaded: false,
  })),
  on(fromPizzas.createPizzaSuccess, (state, { pizza }) => {
    return adapter.upsertOne(pizza, state);
  }),
  on(fromPizzas.updatePizzaSuccess, (state, { pizza }) => {
    return adapter.upsertOne(pizza, state);
  }),
  on(fromPizzas.removePizzaSuccess, (state, { pizza }) => {
    return adapter.removeOne(pizza.id, state);
  }),
);

export const getPizzasEntities = (state: PizzaState) => state.entities;
export const getPizzasLoading = (state: PizzaState) => state.loading;
export const getPizzasLoaded = (state: PizzaState) => state.loaded;
