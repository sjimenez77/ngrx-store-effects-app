import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import * as fromPizzas from './pizzas.reducer';
import * as fromToppings from './toppings.reducer';
import { EntityState } from '@ngrx/entity';
import { Pizza } from '../../models/pizza.model';
import { Topping } from '../../models/topping.model';

export interface ProductsState extends EntityState<any> {
  pizzas: fromPizzas.PizzaState;
  toppings: fromToppings.ToppingsState;
}

export const reducers: ActionReducerMap<Partial<ProductsState>> = {
  pizzas: fromPizzas.reducer,
  toppings: fromToppings.reducer,
};

export const getProductsState = createFeatureSelector<ProductsState>(
  'products',
);
