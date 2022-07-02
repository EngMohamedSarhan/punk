import { createContext } from 'react';
import { ICartItem } from '../constants/types';

export interface ICartContext {
  cart: ICartItem[];
  pushCart(item: ICartItem): void;
  removeCart(id: number): void;
  incQuantity(id: number): void;
  decQuantity(id: number): void;
  handleRemove(i: number): void;
  handleIncrement(i: number): void;
  handleDecrement(i: number): void;
}

const CartContext = createContext<ICartContext | null>(null);

export default CartContext;
