import { useFocusEffect } from '@react-navigation/native';
import React, { FC, memo, MutableRefObject, useContext, useRef } from 'react';
import { ScrollView, View } from 'react-native';

import HeaderButtons from '../../components/HeaderButtons/HeaderButtons';
import ProductAction from '../../components/ProductAction/ProductAction';
import ProductImage from '../../components/ProductImage/ProductImage';
import ProductQuantity from '../../components/ProductQuantity/ProductQuantity';
import ScreenLayout from '../../components/ScreenLayout/ScreenLayout';
import StarRating from '../../components/StarRating/StarRating';
import Typography from '../../components/Typography/Typography';
import { CART_SCREEN_NAME } from '../../constants/screens';
import { INavigationProp, IProduct } from '../../constants/types';
import CartContext from '../../context/CartContext';
import ProductContext from '../../context/ProductContext';
import { palette } from '../../styles/palette';
import { sizes } from '../../styles/sizes';
import styles from '../../styles/styles';

const ProductScreen: FC<INavigationProp> = memo(({ navigation }) => {
  const containerRef = useRef() as MutableRefObject<ScrollView>;
  const quantityRef = useRef(1);
  const productRef = useRef<IProduct>();
  const { product } = useContext(ProductContext)!;
  const { pushCart } = useContext(CartContext)!;
  const { image_url, name, description, ebc } = product!;

  const handleScrollToTop = () =>
    containerRef.current?.scrollTo({ y: 0, animated: false });

  const handleCartNavigation = () => navigation.navigate(CART_SCREEN_NAME);

  const handleFocus = () => {
    if (!productRef.current || productRef.current.id !== product!.id) {
      handleScrollToTop();
    }
    productRef.current = product;
  };

  const handleCart = () =>
    pushCart({ ...product!, quantity: quantityRef.current });

  useFocusEffect(handleFocus);

  return (
    <ScreenLayout>
      <HeaderButtons
        navigation={navigation}
        buttonsProps={{
          name: 'cart-outline',
          variant: 'square',
          color: 'primary',
          onPress: handleCartNavigation,
        }}
      />
      <ScrollView
        ref={containerRef}
        style={{ backgroundColor: palette.background }}
      >
        <ProductImage uri={image_url} />
        <View style={[{ marginLeft: sizes.lg }, styles.screenPadding]}>
          <Typography
            size="4xl"
            fontWeight="800"
            marginTop={sizes.lg}
            fontColor="primaryFont"
          >
            {name}
          </Typography>
          <View style={[styles.horizontalContainer, styles.spaceBetween]}>
            <StarRating score={4.7} style={styles.separator} />
            <ProductQuantity quantityRef={quantityRef} />
          </View>
          <Typography fontWeight="800" size="lg" fontColor="primaryFont">
            Description
          </Typography>
          <Typography size="sm" lineHeight={20} style={styles.miniSeparator}>
            {description}
          </Typography>
          <ProductAction
            price={ebc}
            onPress={handleCart}
            style={styles.miniSeparator}
          />
        </View>
      </ScrollView>
    </ScreenLayout>
  );
});

export default ProductScreen;
