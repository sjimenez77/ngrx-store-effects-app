import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Actions } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { cold, hot } from 'jasmine-marbles';
import { Observable, of } from 'rxjs';
import { PizzasService } from '../../services/pizzas.service';
import * as fromActions from '../actions/pizzas.action';
import * as fromEffects from './pizzas.effect';

describe('PizzasEffects', () => {
  let actions$: Observable<any>;
  let service: PizzasService;
  let effects: fromEffects.PizzasEffects;

  const pizzas = [
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

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        PizzasService,
        fromEffects.PizzasEffects,
        provideMockActions(() => actions$),
      ],
    });

    actions$ = TestBed.get(Actions);
    service = TestBed.get(PizzasService);
    effects = TestBed.get(fromEffects.PizzasEffects);

    spyOn(service, 'getPizzas').and.returnValue(of(pizzas));
    spyOn(service, 'createPizza').and.returnValue(of(pizzas[0]));
    spyOn(service, 'updatePizza').and.returnValue(of(pizzas[0]));
    spyOn(service, 'removePizza').and.returnValue(of(pizzas[0]));
  });

  describe('loadPizzas$', () => {
    it('should return a collection from LoadPizzasSuccess', () => {
      const action = new fromActions.LoadPizzas();
      const completion = new fromActions.LoadPizzasSuccess(pizzas);

      actions$ = hot('-a', { a: action });
      const expected = cold('-b', { b: completion });

      expect(effects.loadPizzas$).toBeObservable(expected);
    });
  });

  describe('createPizza$', () => {
    it('should work', () => {
      const action = new fromActions.CreatePizza(pizzas[0]);
      const completion = new fromActions.CreatePizzaSuccess(pizzas[0]);

      actions$ = hot('-a', { a: action });
      const expected = cold('-c', { c: completion });

      expect(effects.createPizza$).toBeObservable(expected);
    });
  });

  describe('updatePizza$', () => {
    it('should work', () => {
      const action = new fromActions.UpdatePizza(pizzas[0]);
      const completion = new fromActions.UpdatePizzaSuccess(pizzas[0]);

      actions$ = hot('-a', { a: action });
      const expected = cold('-c', { c: completion });

      expect(effects.updatePizza$).toBeObservable(expected);
    });
  });

  describe('removePizza$', () => {
    it('should work', () => {
      const action = new fromActions.RemovePizza(pizzas[0]);
      const completion = new fromActions.RemovePizzaSuccess(pizzas[0]);

      actions$ = hot('-a', { a: action });
      const expected = cold('-c', { c: completion });

      expect(effects.removePizza$).toBeObservable(expected);
    });
  });
});
