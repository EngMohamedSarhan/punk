import React, { FC, memo, useContext } from 'react';
import { Animated } from 'react-native';
import {
  GestureHandlerRootView,
  Swipeable,
} from 'react-native-gesture-handler';

import CartContext from '../../context/CartContext';
import CartItem, { ICartItemProps } from '../CartItem/CartItem';
import SwipeableDeleteAction from '../SwipeableDeleteAction/SwipeableDeleteAction';

export interface ISwipeableCartItemProps extends ICartItemProps {
  handleVisibility(): void;
}

const SwipeableCartItem: FC<ICartItemProps> = memo(({ index, ...props }) => {
  const { handleRemove } = useContext(CartContext)!;
  const renderDeleteButton = (
    prog: Animated.AnimatedInterpolation,
    drag: Animated.AnimatedInterpolation
  ) => <SwipeableDeleteAction iconStartX={-60} dragAnimatedValue={drag} />;

  const handleDelete = () => handleRemove(index);

  return (
    <GestureHandlerRootView>
      <Swipeable
        renderRightActions={renderDeleteButton}
        onSwipeableWillOpen={handleDelete}
      >
        <CartItem index={index} {...props} />
      </Swipeable>
    </GestureHandlerRootView>
  );
});

export default SwipeableCartItem;
