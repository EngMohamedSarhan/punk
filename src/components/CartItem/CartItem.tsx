import React, { FC, memo, useContext } from 'react';
import { Image, View, ViewProps, ViewStyle } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { PRODUCT_SCREEN_NAME } from '../../constants/screens';

import { ICartItem, INavigationProp } from '../../constants/types';
import CartContext from '../../context/CartContext';
import ProductContext from '../../context/ProductContext';
import { palette } from '../../styles/palette';
import { sizes } from '../../styles/sizes';
import styles from '../../styles/styles';
import IconButton from '../IconButton/IconButton';
import {
  decButtonProps,
  incButtonProps,
} from '../ProductQuantity/ProductQuantity';
import Typography from '../Typography/Typography';

export interface ICartItemProps extends ViewProps, ViewStyle, INavigationProp {
  item: ICartItem;
  index: number;
  category?: string;
  handleDelete?(): void;
}

const CartItem: FC<ICartItemProps> = memo(
  ({
    item,
    index,
    style,
    navigation,
    category = 'Beer',
    backgroundColor = palette.background,
    handleDelete,
    ...props
  }) => {
    const { name, quantity, image_url } = item;
    const { setProduct } = useContext(ProductContext)!;
    const { handleIncrement, handleDecrement } = useContext(CartContext)!;

    const handleIncPress = () => handleIncrement(index);

    const handleDecPress = () => {
      if (quantity === 1 && handleDelete) {
        handleDelete();
      } else {
        handleDecrement(index);
      }
    };

    const handleNavigation = () => {
      setProduct(item);
      navigation.navigate(PRODUCT_SCREEN_NAME);
    };

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
          <TouchableWithoutFeedback onPress={handleNavigation}>
            <Image
              source={{ uri: image_url }}
              resizeMode="contain"
              style={styles.cartImage}
            />
          </TouchableWithoutFeedback>
        </View>
      </View>
    );
  }
);

export default CartItem;
