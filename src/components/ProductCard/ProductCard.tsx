import React, { FC, memo, useContext } from 'react';
import {
  Image,
  TouchableWithoutFeedback,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';
import { ADD_TO_CART_NC, MAX_QUANTITY_NC } from '../../constants/notifications';

import { PRODUCT_SCREEN_NAME } from '../../constants/screens';
import { INavigationProp, IProduct } from '../../constants/types';
import { DOLLAR_UNICODE } from '../../constants/unicodes';
import CartContext from '../../context/CartContext';
import NotificationContext from '../../context/NotificationContext';
import ProductContext from '../../context/ProductContext';
import { sizes } from '../../styles/sizes';
import styles from '../../styles/styles';
import IconButton from '../IconButton/IconButton';
import Typography from '../Typography/Typography';

export interface IProductCardProps
  extends ViewProps,
    ViewStyle,
    INavigationProp {
  product: IProduct;
  category?: string;
}

const ProductCard: FC<IProductCardProps> = memo(
  ({ product, navigation, style, category = 'Beer', ...props }) => {
    const { image_url, name, ebc } = product;
    const { pushNotification } = useContext(NotificationContext)!;
    const { setProduct } = useContext(ProductContext)!;
    const { pushCart } = useContext(CartContext)!;

    const handleCart = () => {
      const isAdded = pushCart({ ...product, quantity: 1 });

      pushNotification(isAdded ? ADD_TO_CART_NC : MAX_QUANTITY_NC);
    };

    const handlePress = () => {
      setProduct(product);
      navigation.navigate(PRODUCT_SCREEN_NAME);
    };

    return (
      <TouchableWithoutFeedback onPress={handlePress}>
        <View {...props} style={[style, styles.productCard, props]}>
          <Image
            source={{ uri: image_url }}
            resizeMode="contain"
            style={styles.productCardImage}
          />
          <Typography
            marginTop={sizes.lg}
            fontColor="primaryFont"
            fontWeight="800"
            numberOfLines={1}
          >
            {name}
          </Typography>
          <Typography size="sm" marginTop={sizes.md}>
            {category}
          </Typography>
          <Typography
            fontColor="primary"
            marginTop={sizes.md}
            fontWeight="800"
            letterSpacing={-0.5}
          >
            {`${DOLLAR_UNICODE}${(ebc || 20).toFixed(2)}`}
          </Typography>
          <IconButton
            isMaterialIcon
            name="add"
            iconSize="md"
            color="white"
            elevation={sizes.sm}
            style={styles.productButton}
            onPress={handleCart}
          />
        </View>
      </TouchableWithoutFeedback>
    );
  }
);

export default ProductCard;
