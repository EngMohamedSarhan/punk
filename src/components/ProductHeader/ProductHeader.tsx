import React, { FC, memo } from 'react';
import { View } from 'react-native';

import { INavigationProp } from '../../constants/types';
import styles from '../../styles/styles';
import IconButton from '../IconButton/IconButton';

const ProductHeader: FC<INavigationProp> = memo(
  ({ navigation: { goBack } }) => (
    <View style={[styles.headerContainer]}>
      <IconButton
        variant="square"
        color="primary"
        name="chevron-back"
        onPress={goBack}
      />
      <IconButton variant="square" color="primary" name="cart-outline" />
    </View>
  )
);

export default ProductHeader;
