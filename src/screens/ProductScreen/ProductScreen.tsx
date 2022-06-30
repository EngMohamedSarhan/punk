import React, { FC, Fragment, memo } from 'react';
import { ScrollView, View } from 'react-native';

import ProductAction from '../../components/ProductAction/ProductAction';
import ProductHeader from '../../components/ProductHeader/ProductHeader';
import ProductImage from '../../components/ProductImage/ProductImage';
import ProductQuantity from '../../components/ProductQuantity/ProductQuantity';
import StarRating from '../../components/StarRating/StarRating';
import Typography from '../../components/Typography/Typography';
import { INavigationProp } from '../../constants/types';
import ProductContext from '../../context/ProductContext';
import { palette } from '../../styles/palette';
import { sizes } from '../../styles/sizes';
import styles from '../../styles/styles';

const ProductScreen: FC<INavigationProp> = memo(({ navigation }) => (
  <ProductContext.Consumer>
    {(context) => {
      const { image_url, name, description, ebc } = context!.product!;

      return (
        <Fragment>
          <ProductHeader navigation={navigation} />
          <ScrollView style={{ backgroundColor: palette.background }}>
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
                style={styles.miniseparator}
              >
                {description}
              </Typography>
              <ProductAction price={ebc} style={styles.miniseparator} />
            </View>
          </ScrollView>
        </Fragment>
      );
    }}
  </ProductContext.Consumer>
));

export default ProductScreen;
