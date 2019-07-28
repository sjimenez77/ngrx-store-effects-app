import * as fromToppings from './toppings.action';

describe('Toppings Actions', () => {
  describe('LoadToppings Actions', () => {
    describe('LoadToppings', () => {
      it('should create an action', () => {
        const action = fromToppings.loadToppings();

        expect({ ...action }).toEqual({
          type: fromToppings.LOAD_TOPPINGS,
        });
      });
    });

    describe('LoadToppingsFail', () => {
      it('should create an action', () => {
        const payload = { message: 'Load Error' };
        const action = fromToppings.loadToppingsFail({ error: payload });

        expect({ ...action }).toEqual({
          type: fromToppings.LOAD_TOPPINGS_FAIL,
          error: payload,
        });
      });
    });

    describe('LoadToppingsSuccess', () => {
      it('should create an action', () => {
        const payload = [
          {
            id: 1,
            name: 'anchovy',
          },
          {
            id: 2,
            name: 'bacon',
          },
          {
            id: 3,
            name: 'basil',
          },
        ];
        const action = fromToppings.loadToppingsSuccess({ toppings: payload });

        expect({ ...action }).toEqual({
          type: fromToppings.LOAD_TOPPINGS_SUCCESS,
          toppings: payload,
        });
      });
    });
  });

  describe('VisualiseToppings Actions', () => {
    describe('VisualiseToppings', () => {
      it('should create an action', () => {
        const payload = [1, 2, 3];
        const action = fromToppings.visualiseToppings({ ids: payload });

        expect({ ...action }).toEqual({
          type: fromToppings.VISUALISE_TOPPINGS,
          ids: payload,
        });
      });
    });
  });
});
