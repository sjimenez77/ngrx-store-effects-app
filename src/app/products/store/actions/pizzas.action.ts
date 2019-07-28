import { createAction, props, union } from '@ngrx/store';

import { Pizza } from '../../models/pizza.model';

// load pizzas
export const LOAD_PIZZAS = '[Products] Load Pizzas';
export const LOAD_PIZZAS_FAIL = '[Products] Load Pizzas Fail';
export const LOAD_PIZZAS_SUCCESS = '[Products] Load Pizzas Success';

export const loadPizzas = createAction(LOAD_PIZZAS);
export const loadPizzasFail = createAction(
  LOAD_PIZZAS_FAIL,
  props<{ error: any }>(),
);
export const loadPizzasSuccess = createAction(
  LOAD_PIZZAS_SUCCESS,
  props<{ pizzas: Pizza[] }>(),
);

// create pizza
export const CREATE_PIZZA = '[Products] Create Pizza';
export const CREATE_PIZZA_FAIL = '[Products] Create Pizza Fail';
export const CREATE_PIZZA_SUCCESS = '[Products] Create Pizza Success';

export const createPizza = createAction(
  CREATE_PIZZA,
  props<{ pizza: Pizza }>(),
);

export const createPizzaFail = createAction(
  CREATE_PIZZA_FAIL,
  props<{ error: any }>(),
);

export const createPizzaSuccess = createAction(
  CREATE_PIZZA_SUCCESS,
  props<{ pizza: Pizza }>(),
);

// update pizza
export const UPDATE_PIZZA = '[Products] Update Pizza';
export const UPDATE_PIZZA_FAIL = '[Products] Update Pizza Fail';
export const UPDATE_PIZZA_SUCCESS = '[Products] Update Pizza Success';

export const updatePizza = createAction(
  UPDATE_PIZZA,
  props<{ pizza: Pizza }>(),
);

export const updatePizzaFail = createAction(
  UPDATE_PIZZA_FAIL,
  props<{ error: any }>(),
);

export const updatePizzaSuccess = createAction(
  UPDATE_PIZZA_SUCCESS,
  props<{ pizza: Pizza }>(),
);

// remove pizza
export const REMOVE_PIZZA = '[Products] Remove Pizza';
export const REMOVE_PIZZA_FAIL = '[Products] Remove Pizza Fail';
export const REMOVE_PIZZA_SUCCESS = '[Products] Remove Pizza Success';

export const removePizza = createAction(
  REMOVE_PIZZA,
  props<{ pizza: Pizza }>(),
);

export const removePizzaFail = createAction(
  REMOVE_PIZZA_FAIL,
  props<{ error: any }>(),
);

export const removePizzaSuccess = createAction(
  REMOVE_PIZZA_SUCCESS,
  props<{ pizza: Pizza }>(),
);

// action types
const all = union({
  loadPizzas,
  loadPizzasFail,
  loadPizzasSuccess,
  createPizza,
  createPizzaFail,
  createPizzaSuccess,
  updatePizza,
  updatePizzaFail,
  updatePizzaSuccess,
  removePizza,
  removePizzaFail,
  removePizzaSuccess,
});
export type PizzasAction = typeof all;
