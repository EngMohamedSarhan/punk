import React, { FC, memo, useEffect, useLayoutEffect, useRef } from 'react';
import {
  Animated,
  useWindowDimensions,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';
import { Color, palette } from '../../styles/palette';

export interface ILinearActivityIndicatorProps extends ViewProps, ViewStyle {
  isFullWidth?: boolean;
  primaryColor?: Color;
  secondaryColor?: Color;
  duration?: number;
  indicatorWidth?: string | number;
}

const LinearActivityIndicator: FC<ILinearActivityIndicatorProps> = memo(
  ({
    style,
    zIndex = 1,
    isFullWidth = true,
    width = isFullWidth ? '100%' : undefined,
    overflow = 'hidden',
    primaryColor = 'primary',
    secondaryColor = 'light',
    height = 5,
    indicatorWidth = '40%',
    duration = 1000,
    ...props
  }) => {
    const { current: translateX } = useRef(new Animated.Value(0));
    const { width: toValue } = useWindowDimensions();

    const handleAnimation = () => {
      translateX.setValue(-toValue);
      Animated.timing(translateX, {
        toValue,
        duration,
        useNativeDriver: true,
      }).start(() => handleAnimation());
    };

    useLayoutEffect(() => handleAnimation());

    useEffect(() => {
      return () => {
        translateX.stopAnimation();
      };
    }, [translateX]);

    return (
      <View
        {...props}
        style={[
          {
            overflow,
            zIndex,
            width,
            height,
            backgroundColor: palette[secondaryColor],
          },
          props,
          style,
        ]}
      >
        <Animated.View
          {...props}
          style={[
            {
              height,
              backgroundColor: palette[primaryColor],
            },
            props,
            style,
            {
              width: indicatorWidth,
              transform: [{ translateX }],
            },
          ]}
        />
      </View>
    );
  }
);

export default LinearActivityIndicator;
