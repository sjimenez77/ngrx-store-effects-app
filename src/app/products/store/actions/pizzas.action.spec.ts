import * as fromPizzas from './pizzas.action';

describe('Pizzas Actions', () => {
  describe('LoadPizzas Actions', () => {
    describe('LoadPizzas', () => {
      it('should create an action', () => {
        const action = fromPizzas.loadPizzas();

        expect({ ...action }).toEqual({
          type: fromPizzas.LOAD_PIZZAS,
        });
      });
    });

    describe('LoadPizzasFail', () => {
      it('should create an action', () => {
        const payload = { message: 'Load Error' };
        const action = fromPizzas.loadPizzasFail({ error: payload });

        expect({ ...action }).toEqual({
          type: fromPizzas.LOAD_PIZZAS_FAIL,
          error: payload,
        });
      });
    });

    describe('LoadPizzasSuccess', () => {
      it('should create an action', () => {
        const payload = [
          {
            id: 1,
            name: 'Pizza #1',
            toppings: [
              { id: 1, name: 'onion' },
              { id: 2, name: 'mushroom' },
              { id: 3, name: 'basil' },
            ],
          },
          {
            id: 2,
            name: 'Pizza #2',
            toppings: [
              { id: 1, name: 'onion' },
              { id: 2, name: 'mushroom' },
              { id: 3, name: 'basil' },
            ],
          },
        ];
        const action = fromPizzas.loadPizzasSuccess({ pizzas: payload });

        expect({ ...action }).toEqual({
          type: fromPizzas.LOAD_PIZZAS_SUCCESS,
          pizzas: payload,
        });
      });
    });
  });

  describe('CreatePizza Actions', () => {
    describe('CreatePizza', () => {
      it('should create an action', () => {
        const payload = {
          name: 'Pizza #2',
          toppings: [
            { id: 1, name: 'onion' },
            { id: 2, name: 'mushroom' },
            { id: 3, name: 'basil' },
          ],
        };
        const action = fromPizzas.createPizza({ pizza: payload });

        expect({ ...action }).toEqual({
          type: fromPizzas.CREATE_PIZZA,
          pizza: payload,
        });
      });
    });

    describe('CreatePizzaFail', () => {
      it('should create an action', () => {
        const payload = { message: 'Create Error' };
        const action = fromPizzas.createPizzaFail({ error: payload });

        expect({ ...action }).toEqual({
          type: fromPizzas.CREATE_PIZZA_FAIL,
          error: payload,
        });
      });
    });

    describe('CreatePizzaSuccess', () => {
      it('should create an action', () => {
        const payload = {
          id: 2,
          name: 'Pizza #2',
          toppings: [
            { id: 1, name: 'onion' },
            { id: 2, name: 'mushroom' },
            { id: 3, name: 'basil' },
          ],
        };
        const action = fromPizzas.createPizzaSuccess({ pizza: payload });

        expect({ ...action }).toEqual({
          type: fromPizzas.CREATE_PIZZA_SUCCESS,
          pizza: payload,
        });
      });
    });
  });

  describe('UpdatePizza Actions', () => {
    describe('UpdatePizza', () => {
      it('should create an action', () => {
        const payload = {
          id: 2,
          name: 'Pizza #2',
          toppings: [
            { id: 1, name: 'onion' },
            { id: 2, name: 'mushroom' },
            { id: 3, name: 'basil' },
          ],
        };
        const action = fromPizzas.updatePizza({ pizza: payload });

        expect({ ...action }).toEqual({
          type: fromPizzas.UPDATE_PIZZA,
          pizza: payload,
        });
      });
    });

    describe('UpdatePizzaFail', () => {
      it('should create an action', () => {
        const payload = { message: 'Update Error' };
        const action = fromPizzas.updatePizzaFail({ error: payload });

        expect({ ...action }).toEqual({
          type: fromPizzas.UPDATE_PIZZA_FAIL,
          error: payload,
        });
      });
    });

    describe('UpdatePizzaSuccess', () => {
      it('should create an action', () => {
        const payload = {
          id: 2,
          name: 'Pizza #2',
          toppings: [
            { id: 1, name: 'onion' },
            { id: 2, name: 'mushroom' },
            { id: 3, name: 'basil' },
          ],
        };
        const action = fromPizzas.updatePizzaSuccess({ pizza: payload });

        expect({ ...action }).toEqual({
          type: fromPizzas.UPDATE_PIZZA_SUCCESS,
          pizza: payload,
        });
      });
    });
  });

  describe('RemovePizza Actions', () => {
    describe('RemovePizza', () => {
      it('should create an action', () => {
        const payload = {
          id: 2,
          name: 'Pizza #2',
          toppings: [
            { id: 1, name: 'onion' },
            { id: 2, name: 'mushroom' },
            { id: 3, name: 'basil' },
          ],
        };
        const action = fromPizzas.removePizza({ pizza: payload });

        expect({ ...action }).toEqual({
          type: fromPizzas.REMOVE_PIZZA,
          pizza: payload,
        });
      });
    });

    describe('RemovePizzaFail', () => {
      it('should create an action', () => {
        const payload = { message: 'Remove Error' };
        const action = fromPizzas.removePizzaFail({ error: payload });

        expect({ ...action }).toEqual({
          type: fromPizzas.REMOVE_PIZZA_FAIL,
          error: payload,
        });
      });
    });

    describe('RemovePizzaSuccess', () => {
      it('should create an action', () => {
        const payload = {
          id: 2,
          name: 'Pizza #2',
          toppings: [
            { id: 1, name: 'onion' },
            { id: 2, name: 'mushroom' },
            { id: 3, name: 'basil' },
          ],
        };
        const action = fromPizzas.removePizzaSuccess({ pizza: payload });

        expect({ ...action }).toEqual({
          type: fromPizzas.REMOVE_PIZZA_SUCCESS,
          pizza: payload,
        });
      });
    });
  });
});
