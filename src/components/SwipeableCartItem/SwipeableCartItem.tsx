import React, { FC, memo, useContext, useState } from 'react';
import { Animated } from 'react-native';
import Collapsible from 'react-native-collapsible';
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
  const [isCollapsed, setIsCollapsed] = useState(false);

  const renderDeleteButton = (
    prog: Animated.AnimatedInterpolation,
    drag: Animated.AnimatedInterpolation
  ) => <SwipeableDeleteAction iconStartX={-60} dragAnimatedValue={drag} />;

  const handleAnimation = () => setIsCollapsed(true);

  const handleDelete = () => handleRemove(index);

  return (
    <GestureHandlerRootView>
      <Swipeable
        renderRightActions={renderDeleteButton}
        onSwipeableWillOpen={handleAnimation}
      >
        <Collapsible collapsed={isCollapsed} onAnimationEnd={handleDelete}>
          <CartItem index={index} {...props} />
        </Collapsible>
      </Swipeable>
    </GestureHandlerRootView>
  );
});

export default SwipeableCartItem;
