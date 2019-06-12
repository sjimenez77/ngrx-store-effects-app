import { createSelector } from '@ngrx/store';

import * as fromRoot from '../../../store';
import * as fromFeature from '../reducers';
import * as fromPizzas from '../reducers/pizzas.reducer';
import * as fromToppings from './toppings.selectors';

import { Pizza } from '../../models/pizza.model';

export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal,
} = fromPizzas.adapter.getSelectors();

export const getPizzaState = createSelector(
  fromFeature.getProductsState,
  (state: fromFeature.ProductsState) => state.pizzas,
);

export const getPizzasEntities = createSelector(
  getPizzaState,
  selectEntities,
);

export const getSelectedPizza = createSelector(
  getPizzasEntities,
  fromRoot.getRouterState,
  (entities, router): Pizza => {
    return router.state && entities[router.state.params.pizzaId];
  },
);

export const getPizzaVisualized = createSelector(
  getSelectedPizza,
  fromToppings.getToppingEntities,
  fromToppings.getSelectedToppings,
  (pizza, toppingEntities, selectedToppings) => {
    const toppings = selectedToppings.map((id) => toppingEntities[id]);
    return { ...pizza, toppings };
  },
);

export const getAllPizzas = createSelector(
  getPizzaState,
  selectAll,
);

export const getPizzasLoaded = createSelector(
  getPizzaState,
  fromPizzas.getPizzasLoaded,
);
export const getPizzasLoading = createSelector(
  getPizzaState,
  fromPizzas.getPizzasLoading,
);