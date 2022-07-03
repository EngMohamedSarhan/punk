import React, { FC, memo, ReactNode, useState } from 'react';

import { ICartItem } from '../../constants/types';
import CartContext from '../../context/CartContext';

export interface ICartProviderProps {
  children?: ReactNode;
}

const CartProvider: FC<ICartProviderProps> = memo(({ children }) => {
  const [cart, setCart] = useState<ICartItem[]>([]);

  const updateCart = () => setCart([...cart]);

  const getItemIndex = (itemId: number) =>
    cart.findIndex(({ id }) => id === itemId);

  const handleIncrement = (i: number, quantity = 1) => {
    if (cart[i].quantity + quantity <= 9) {
      cart[i].quantity += quantity;
      updateCart();

      return true;
    } else if (cart[i].quantity !== 9) {
      cart[i].quantity = 9;
      updateCart();

      return true;
    }

    return false;
  };

  const incQuantity = (id: number, quantity?: number) => {
    const i = getItemIndex(id);

    handleIncrement(i, quantity);
  };

  const pushCart = (item: ICartItem) => {
    const i = getItemIndex(item.id);

    if (i > -1) {
      return handleIncrement(i, item.quantity);
    }

    cart.push(item);
    updateCart();

    return true;
  };

  const handleRemove = (i: number) => {
    cart.splice(i, 1);
    updateCart();
  };

  const removeCart = (id: number) => {
    const i = getItemIndex(id);

    handleRemove(i);
  };

  const handleDecrement = (i: number) => {
    if (cart[i].quantity - 1 === 0) {
      handleRemove(i);
    } else {
      cart[i].quantity -= 1;
      updateCart();
    }
  };

  const decQuantity = (id: number) => {
    const i = getItemIndex(id);

    handleDecrement(i);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        pushCart,
        removeCart,
        incQuantity,
        decQuantity,
        handleRemove,
        handleIncrement,
        handleDecrement,
      }}
    >
      {children}
    </CartContext.Provider>
  );
});

export default CartProvider;
