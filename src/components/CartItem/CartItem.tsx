import React, { FC, memo, useContext } from 'react';
import { Image, View, ViewProps, ViewStyle } from 'react-native';

import { ICartItem } from '../../constants/types';
import CartContext from '../../context/CartContext';
import { palette } from '../../styles/palette';
import { sizes } from '../../styles/sizes';
import styles from '../../styles/styles';
import IconButton from '../IconButton/IconButton';
import {
  decButtonProps,
  incButtonProps,
} from '../ProductQuantity/ProductQuantity';
import Typography from '../Typography/Typography';

export interface ICartItemProps extends ViewProps, ViewStyle {
  item: ICartItem;
  index: number;
  category?: string;
}

const CartItem: FC<ICartItemProps> = memo(
  ({
    item,
    index,
    style,
    category = 'Beer',
    backgroundColor = palette.background,
    ...props
  }) => {
    const { name, quantity, image_url } = item;
    const { handleIncrement, handleDecrement } = useContext(CartContext)!;

    const handleIncPress = () => handleIncrement(index);

    const handleDecPress = () => handleDecrement(index);

    return (
      <View
        {...props}
        style={[
          styles.horizontalContainer,
          styles.spaceBetween,
          { backgroundColor },
          style,
        ]}
      >
        <View style={[styles.flex, { marginRight: sizes.md }]}>
          <Typography fontColor="primaryFont">{name}</Typography>
          <Typography size="sm" marginTop={6}>
            {category}
          </Typography>
        </View>

        <View style={styles.horizontalContainer}>
          <View
            style={[
              styles.spaceBetween,
              styles.center,
              { marginRight: sizes.sm },
            ]}
          >
            <IconButton {...incButtonProps} onPress={handleIncPress} />
            <Typography fontColor="black">{quantity}</Typography>
            <IconButton {...decButtonProps} onPress={handleDecPress} />
          </View>
          <Image
            source={{ uri: image_url }}
            resizeMode="contain"
            style={styles.cartImage}
          />
        </View>
      </View>
    );
  }
);

export default CartItem;
