import React, { FC, memo, ReactNode, useContext, useState } from 'react';

import {
  ADD_TO_CART_NC,
  INC_QUANTITY_NC,
  MAX_QUANTITY_NC,
  REMOVE_FROM_CART_NC,
} from '../../constants/notifications';
import { ICartItem } from '../../constants/types';
import CartContext from '../../context/CartContext';
import NotificationContext from '../../context/NotificationContext';

export interface ICartProviderProps {
  children?: ReactNode;
}

const CartProvider: FC<ICartProviderProps> = memo(({ children }) => {
  const { pushNotification } = useContext(NotificationContext)!;
  const [cart, setCart] = useState<ICartItem[]>([]);

  const updateCart = () => setCart([...cart]);

  const getItemIndex = (itemId: number) =>
    cart.findIndex(({ id }) => id === itemId);

  const handleIncrement = (i: number, quantity = 1) => {
    if (cart[i].quantity === 9) {
      pushNotification(MAX_QUANTITY_NC);
    } else if (cart[i].quantity + quantity <= 9) {
      cart[i].quantity += quantity;
    } else {
      cart[i].quantity = 9;
    }

    updateCart();
  };

  const incQuantity = (id: number, quantity?: number) => {
    const i = getItemIndex(id);

    handleIncrement(i, quantity);
  };

  const pushCart = (item: ICartItem) => {
    const i = getItemIndex(item.id);

    if (i > -1) {
      if (cart[i].quantity !== 9) {
        pushNotification(INC_QUANTITY_NC);
      }
      handleIncrement(i, item.quantity);
    } else {
      cart.push(item);
      updateCart();
      pushNotification(ADD_TO_CART_NC);
    }
  };

  const handleRemove = (i: number) => {
    cart.splice(i, 1);
    updateCart();
    pushNotification(REMOVE_FROM_CART_NC);
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
