import React, { FC, memo } from 'react';
import { View, ViewProps } from 'react-native';

import { POINT_UNICODE } from '../../constants/unicodes';
import { sizes } from '../../styles/sizes';
import styles from '../../styles/styles';
import Typography, { ITypographyProps } from '../Typography/Typography';

export interface ICategoryTypographyProps extends ITypographyProps {
  isSelected?: boolean;
  containerProps?: ViewProps;
}

const selectedStyle: ITypographyProps = {
  fontColor: 'primary',
  fontWeight: '800',
  textTransform: 'uppercase',
};

const CategoryTypography: FC<ICategoryTypographyProps> = memo(
  ({
    isSelected,
    containerProps,
    children,
    margin,
    marginTop,
    marginBottom,
    marginEnd,
    marginHorizontal = sizes.lg,
    marginLeft,
    marginRight,
    marginStart,
    marginVertical,
    padding,
    paddingBottom,
    paddingEnd,
    paddingHorizontal,
    paddingLeft,
    paddingRight,
    paddingStart,
    paddingTop,
    textTransform = 'capitalize',
    letterSpacing = 0,
    ...props
  }) => (
    <View
      {...containerProps}
      style={[
        styles.categoryTypography,
        {
          margin,
          marginTop,
          marginBottom,
          marginEnd,
          marginHorizontal,
          marginLeft,
          marginRight,
          marginStart,
          marginVertical,
          padding,
          paddingBottom,
          paddingEnd,
          paddingHorizontal,
          paddingLeft,
          paddingRight,
          paddingStart,
          paddingTop,
        },
        containerProps?.style,
      ]}
    >
      <Typography
        letterSpacing={letterSpacing}
        textTransform={textTransform}
        {...(isSelected && selectedStyle)}
        {...props}
      >
        {children}
      </Typography>
      {isSelected && (
        <Typography fontColor="primary" size="6xl" marginTop={-16}>
          {POINT_UNICODE}
        </Typography>
      )}
    </View>
  )
);

export default CategoryTypography;
