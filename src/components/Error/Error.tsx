import React, { FC, memo } from 'react';
import { Image, View, ViewProps, ViewStyle } from 'react-native';

import { sadImg } from '../../constants/images';
import styles from '../../styles/styles';
import Scale from '../Scale/Scale';
import Typography from '../Typography/Typography';

export interface IErrorProps extends ViewProps, ViewStyle {
  isAnimated?: boolean;
  title?: string;
}

const Error: FC<IErrorProps> = memo(
  ({ isAnimated, title, style, ...props }) => {
    const renderContent = () => (
      <View {...props} style={[styles.center, props, style]}>
        <Image source={sadImg} style={styles.emptyCartImage} />
        <Typography
          size="5xl"
          fontWeight="800"
          fontColor="primaryFont"
          letterSpacing={1}
        >
          {title}
        </Typography>
      </View>
    );

    return isAnimated ? (
      <Scale isScaled>{renderContent()}</Scale>
    ) : (
      renderContent()
    );
  }
);

export default Error;
