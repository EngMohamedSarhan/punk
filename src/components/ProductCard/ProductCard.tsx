import { NavigationProp } from '@react-navigation/native';
import React, { FC, memo } from 'react';
import {
  Image,
  TouchableWithoutFeedback,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';

import { IProduct } from '../../constants/types';
import { DOLLAR_UNICODE } from '../../constants/unicodes';
import ProductContext, { IProductContext } from '../../context/ProductContext';
import { sizes } from '../../styles/sizes';
import styles from '../../styles/styles';
import IconButton from '../IconButton/IconButton';
import Typography from '../Typography/Typography';

export interface IProductCardProps extends ViewProps, ViewStyle {
  Product: IProduct;
  navigation: NavigationProp<any>;
}

const ProductCard: FC<IProductCardProps> = memo(
  ({ Product, navigation, style, ...props }) => {
    const { image_url, name, ebc } = Product;

    const handlePress = (context: IProductContext | null) => {
      context?.setProduct(Product);
      navigation.navigate('Product');
    };

    return (
      <ProductContext.Consumer>
        {(context) => (
          <TouchableWithoutFeedback onPress={() => handlePress(context)}>
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
                Beer
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
                style={styles.ProductButton}
              />
            </View>
          </TouchableWithoutFeedback>
        )}
      </ProductContext.Consumer>
    );
  }
);

export default ProductCard;
