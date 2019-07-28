import { createAction, props, union } from '@ngrx/store';
import { Topping } from '../../models/topping.model';

export const LOAD_TOPPINGS = '[Products] Load Toppings';
export const LOAD_TOPPINGS_FAIL = '[Products] Load Toppings Fail';
export const LOAD_TOPPINGS_SUCCESS = '[Products] Load Toppings Success';
export const VISUALISE_TOPPINGS = '[Products] Visualise Toppings';

export const loadToppings = createAction(LOAD_TOPPINGS);

export const loadToppingsFail = createAction(
  LOAD_TOPPINGS_FAIL,
  props<{ error: any }>(),
);

export const loadToppingsSuccess = createAction(
  LOAD_TOPPINGS_SUCCESS,
  props<{ toppings: Topping[] }>(),
);

export const visualiseToppings = createAction(
  VISUALISE_TOPPINGS,
  props<{ ids: number[] }>(),
);

// action types
const all = union({
  loadToppings,
  loadToppingsFail,
  loadToppingsSuccess,
  visualiseToppings,
});
export type ToppingsAction = typeof all;
