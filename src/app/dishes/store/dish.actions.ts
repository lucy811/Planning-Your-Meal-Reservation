import { Action } from '@ngrx/store';
import { Dish } from '../dish.model';

export const SET_DISHES = 'SET_DISHES';
export const ADD_DISH = 'ADD_DISH';
export const UPDATE_DISH = 'UPDATE_DISH';
export const DELETE_DISH = 'DELETE_DISH';
export const STORE_DISHES = 'STORE_DISHES';
export const FETCH_DISHES = 'FETCH_DISHES';

export class SetDishes implements Action {
  readonly type = SET_DISHES;

  constructor(public payload: Dish[]) {}
}

export class AddDish implements Action {
  readonly type = ADD_DISH;

  constructor(public payload: Dish) {}
}

export class UpdateDish implements Action {
  readonly type = UPDATE_DISH;

  constructor(public payload: {index: number, updatedDish: Dish}) {}
}

export class DeleteDish implements Action {
  readonly type = DELETE_DISH;

  constructor(public payload: number) {}
}

export class StoreDishes implements Action {
  readonly type = STORE_DISHES;
}

export class FetchDishes implements Action {
  readonly type = FETCH_DISHES;
}

export type DishActions = SetDishes | AddDish | UpdateDish | DeleteDish | StoreDishes | FetchDishes;