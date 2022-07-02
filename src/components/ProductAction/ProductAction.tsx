import React, { FC, memo } from 'react';
import { GestureResponderEvent, View, ViewProps } from 'react-native';

import { DOLLAR_UNICODE } from '../../constants/unicodes';
import { sizes } from '../../styles/sizes';
import styles from '../../styles/styles';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import Typography from '../Typography/Typography';

export interface IProductActionProps extends ViewProps {
  price?: number;
  onPress?(event: GestureResponderEvent): void;
}

const ProductAction: FC<IProductActionProps> = memo(
  ({ price, style, onPress, ...props }) => (
    <View
      {...props}
      style={[
        style,
        styles.horizontalContainer,
        styles.spaceBetween,
        styles.flexEnd,
      ]}
    >
      <View>
        <Typography size="sm">Price</Typography>
        <Typography
          fontColor="darkGreen"
          marginTop={sizes.md}
          fontWeight="800"
          letterSpacing={-0.5}
          size="5xl"
        >
          {`${DOLLAR_UNICODE}${(price || 20).toFixed(2)}`}
        </Typography>
      </View>
      <Button
        title="Add to Cart"
        fontSize="lg"
        endAdornment={
          <Icon
            isMaterialIcon
            name="arrow-forward-ios"
            color="white"
            style={{ marginLeft: sizes.lg }}
          />
        }
        onPress={onPress}
      />
    </View>
  )
);

export default ProductAction;
