import { useFocusEffect } from '@react-navigation/native';
import React, { FC, memo, MutableRefObject, useRef } from 'react';
import { ScrollView, View } from 'react-native';

import ProductAction from '../../components/ProductAction/ProductAction';
import ProductHeader from '../../components/ProductHeader/ProductHeader';
import ProductImage from '../../components/ProductImage/ProductImage';
import ProductQuantity from '../../components/ProductQuantity/ProductQuantity';
import ScreenLayout from '../../components/ScreenLayout/ScreenLayout';
import StarRating from '../../components/StarRating/StarRating';
import Typography from '../../components/Typography/Typography';
import { INavigationProp } from '../../constants/types';
import ProductContext from '../../context/ProductContext';
import { palette } from '../../styles/palette';
import { sizes } from '../../styles/sizes';
import styles from '../../styles/styles';

const ProductScreen: FC<INavigationProp> = memo(({ navigation }) => {
  const containerRef = useRef() as MutableRefObject<ScrollView>;

  const handleScrollToTop = () =>
    containerRef.current?.scrollTo({ y: 0, animated: false });

  useFocusEffect(handleScrollToTop);

  return (
    <ProductContext.Consumer>
      {(context) => {
        const { image_url, name, description, ebc } = context!.product!;

        return (
          <ScreenLayout>
            <ProductHeader navigation={navigation} />
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
                  <ProductQuantity />
                </View>
                <Typography fontWeight="800" size="lg" fontColor="primaryFont">
                  Description
                </Typography>
                <Typography
                  size="sm"
                  lineHeight={20}
                  style={styles.miniSeparator}
                >
                  {description}
                </Typography>
                <ProductAction price={ebc} style={styles.miniSeparator} />
              </View>
            </ScrollView>
          </ScreenLayout>
        );
      }}
    </ProductContext.Consumer>
  );
});

export default ProductScreen;
