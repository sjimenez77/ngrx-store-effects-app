import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as fromToppings from '../actions/toppings.action';
import { Topping } from '../../models/topping.model';

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

export function reducer(
  state = initialState,
  action: fromToppings.ToppingsAction,
): ToppingsState {
  switch (action.type) {
    case fromToppings.VISUALISE_TOPPINGS: {
      const selectedToppings = action.payload;
      state = {
        ...state,
        selectedToppings,
      };
      return state;
    }

    case fromToppings.LOAD_TOPPINGS: {
      return {
        ...state,
        loading: true,
      };
    }

    case fromToppings.LOAD_TOPPINGS_SUCCESS: {
      const toppings = action.payload;
      state = { ...state, loading: false, loaded: true };
      return adapter.addAll(toppings, state);
    }

    case fromToppings.LOAD_TOPPINGS_FAIL: {
      return {
        ...state,
        loaded: false,
        loading: false,
      };
    }
  }

  return state;
}

export const getToppingEntities = (state: ToppingsState) => state.entities;
export const getToppingsLoaded = (state: ToppingsState) => state.loaded;
export const getToppingsLoading = (state: ToppingsState) => state.loading;
export const getSelectedToppings = (state: ToppingsState) =>
  state.selectedToppings;
