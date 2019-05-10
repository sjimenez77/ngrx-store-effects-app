import { createSelector } from '@ngrx/store';

import * as fromRoot from '../../../store';
import * as fromFeature from '../reducers';
import * as fromToppings from '../reducers/toppings.reducer';

import { Topping } from '../../models/topping.model';

export const {
  selectAll: selectAllToppings,
  selectEntities: selectToppingsEntities,
  selectIds: selectToppingsIds,
  selectTotal: selectTotalToppings,
} = fromToppings.adapter.getSelectors();

export const getToppingsState = createSelector(
  fromFeature.getProductsState,
  (state: fromFeature.ProductsState) => state.toppings,
);

export const getToppingEntities = createSelector(
  getToppingsState,
  selectToppingsEntities,
);

export const getSelectedToppings = createSelector(
  getToppingsState,
  fromToppings.getSelectedToppings,
);

export const getAllToppings = createSelector(
  getToppingsState,
  selectAllToppings,
);

export const getToppingsLoaded = createSelector(
  getToppingsState,
  fromToppings.getToppingsLoaded,
);

export const getToppingsLoading = createSelector(
  getToppingsState,
  fromToppings.getToppingsLoading,
);
