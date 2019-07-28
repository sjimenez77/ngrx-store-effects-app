import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as fromToppings from '../actions/toppings.action';
import { Topping } from '../../models/topping.model';
import { createReducer, on } from '@ngrx/store';

export interface ToppingsState extends EntityState<Topping> {
  loaded: boolean;
  loading: boolean;
  selectedToppings: number[];
}

export const adapter: EntityAdapter<Topping> = createEntityAdapter<Topping>();

export const initialState: ToppingsState = adapter.getInitialState({
  loaded: false,
  loading: false,
  selectedToppings: [],
});

export const reducer = createReducer(
  initialState,
  on(fromToppings.visualiseToppings, (state, { ids }) => ({
    ...state,
    selectedToppings: ids,
  })),
  on(fromToppings.loadToppings, (state) => ({
    ...state,
    loading: true,
  })),
  on(fromToppings.loadToppingsSuccess, (state, { toppings }) => {
    return adapter.addAll(toppings, {
      ...state,
      loading: false,
      loaded: true,
    });
  }),
  on(fromToppings.loadToppingsFail, (state) => ({
    ...state,
    loaded: false,
    loading: false,
  })),
);

export const getToppingEntities = (state: ToppingsState) => state.entities;
export const getToppingsLoaded = (state: ToppingsState) => state.loaded;
export const getToppingsLoading = (state: ToppingsState) => state.loading;
export const getSelectedToppings = (state: ToppingsState) =>
  state.selectedToppings;
