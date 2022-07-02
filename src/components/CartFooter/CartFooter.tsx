import React, { FC, memo, useContext, useMemo } from 'react';
import { View, ViewProps, ViewStyle } from 'react-native';
import { DOLLAR_UNICODE } from '../../constants/unicodes';
import CartContext from '../../context/CartContext';
import { sizes } from '../../styles/sizes';
import styles from '../../styles/styles';
import Button from '../Button/Button';
import Typography from '../Typography/Typography';

export interface ICartFooterProps extends ViewProps, ViewStyle {}

const CartFooter: FC<ICartFooterProps> = memo(({ style, ...props }) => {
  const { cart } = useContext(CartContext)!;
  const total = useMemo(
    () =>
      cart.reduce(
        (sum, { quantity, ebc }) => (sum += (ebc || 20) * quantity),
        0
      ),
    [cart]
  );

  return (
    <View {...props} style={[props, style]}>
      <View style={[styles.horizontalContainer, styles.spaceBetween]}>
        <Typography size="xl" fontColor="primaryFont">
          Total:
        </Typography>
        <Typography size="xl" fontColor="primaryFont">
          {`${total}${DOLLAR_UNICODE}`}
        </Typography>
      </View>
      <Button title="Checkout" alignSelf="flex-end" marginTop={sizes.xl} />
    </View>
  );
});

export default CartFooter;
