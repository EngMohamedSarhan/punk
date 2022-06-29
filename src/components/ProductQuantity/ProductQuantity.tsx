import { useFocusEffect } from '@react-navigation/native';
import React, { FC, memo, useCallback, useState } from 'react';
import { View, ViewProps } from 'react-native';

import { palette } from '../../styles/palette';
import { sizes } from '../../styles/sizes';
import styles from '../../styles/styles';
import IconButton from '../IconButton/IconButton';
import Typography from '../Typography/Typography';

const ProductQuantity: FC<ViewProps> = memo(() => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    if (quantity < 9) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity !== 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleFocus = useCallback(() => setQuantity(1), []);

  useFocusEffect(handleFocus);

  return (
    <View style={styles.quantityContainer}>
      <IconButton
        isMaterialIcon
        name="remove"
        color="primary"
        padding={0}
        backgroundColor={palette.lightGreen}
        style={styles.smIconButton}
        onPress={handleDecrement}
      />
      <Typography fontColor="black" marginHorizontal={sizes.lg}>
        {quantity}
      </Typography>
      <IconButton
        variant="gradient"
        isMaterialIcon
        name="add"
        color="white"
        padding={0}
        gradientProps={{
          colors: [palette.green, palette.primary],
          style: styles.smIconButton,
        }}
        onPress={handleIncrement}
      />
    </View>
  );
});

export default ProductQuantity;
