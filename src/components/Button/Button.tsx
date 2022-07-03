import React, { FC, memo, ReactNode } from 'react';
import {
  StyleProp,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';
import LinearGradient, {
  LinearGradientProps,
} from 'react-native-linear-gradient';

import { FontSize } from '../../styles/fonts';
import { Color, palette } from '../../styles/palette';
import { sizes } from '../../styles/sizes';
import Typography from '../Typography/Typography';

export interface IButtonProps
  extends ViewProps,
    TouchableOpacityProps,
    ViewStyle {
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  gradientProps?: LinearGradientProps;
  isFullWidth?: boolean;
  fontSize?: FontSize;
  title?: string;
  color?: Color;
  fontColor?: Color;
  textStyle?: StyleProp<TextStyle>;
  textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase';
  textDecorationLine?:
    | 'none'
    | 'underline'
    | 'line-through'
    | 'underline line-through';
}

const Button: FC<IButtonProps> = memo(
  ({
    startAdornment,
    endAdornment,
    title,
    isFullWidth,
    style,
    textStyle,
    textDecorationLine,
    gradientProps,
    elevation = sizes.sm,
    alignSelf = 'flex-start',
    width = isFullWidth ? '100%' : undefined,
    paddingVertical = sizes['3xl'],
    paddingHorizontal = sizes['6xl'],
    flexDirection = 'row',
    alignItems = 'center',
    justifyContent = 'center',
    fontColor = 'white',
    fontSize = 'lg',
    textTransform,
    borderRadius = sizes['9xl'],
    ...props
  }) => (
    <TouchableOpacity activeOpacity={0.7} {...props}>
      <View>
        <LinearGradient
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          colors={[palette.green, palette.primary]}
          {...gradientProps}
          style={[
            props,
            style,
            gradientProps?.style,
            {
              elevation,
              paddingVertical,
              paddingHorizontal,
              flexDirection,
              justifyContent,
              alignItems,
              alignSelf,
              width,
              borderRadius,
            },
          ]}
        >
          {startAdornment}
          <Typography
            textTransform={textTransform}
            textDecorationLine={textDecorationLine}
            fontWeight="800"
            textAlign="center"
            fontColor={fontColor}
            size={fontSize}
            style={textStyle}
          >
            {title}
          </Typography>
          {endAdornment}
        </LinearGradient>
      </View>
    </TouchableOpacity>
  )
);

export default Button;
