import React, { FC, forwardRef, memo } from 'react';
import {
  GestureResponderEvent,
  Image,
  ImageProps,
  TouchableOpacity,
  View,
  ViewProps,
} from 'react-native';
import LinearGradient, {
  LinearGradientProps,
} from 'react-native-linear-gradient';

import { Color, FontColor, palette } from '../../styles/palette';
import { IconSize, sizes } from '../../styles/sizes';
import styles from '../../styles/styles';
import Icon, { IIconProps } from '../Icon/Icon';
import Typography, { ITypographyProps } from '../Typography/Typography';

export interface IIconButtonProps extends ViewProps {
  isMaterialIcon?: boolean;
  variant?: 'standard' | 'elevated' | 'gradient';
  color?: Color;
  fontColor?: FontColor;
  icon?: IIconProps;
  iconSize?: IconSize;
  name?: string;
  size?: number;
  title?: string;
  gradientProps?: LinearGradientProps;
  titleProps?: ITypographyProps;
  imageProps?: ImageProps;
  onPress?:
    | (((event: GestureResponderEvent) => void) & (() => void))
    | undefined;
}

const IconButton: FC<IIconButtonProps> = forwardRef<View, IIconButtonProps>(
  (
    {
      isMaterialIcon,
      icon,
      iconSize,
      name,
      size,
      title,
      style,
      color,
      fontColor,
      gradientProps,
      titleProps,
      imageProps,
      variant = 'standard',
      onPress,
      ...props
    },
    ref
  ) => {
    const renderContent = () => (
      <View
        {...props}
        ref={ref}
        style={[
          {
            ...(variant === 'elevated' && {
              elevation: sizes.lg,
              shadowRadius: sizes.sm,
              shadowOffset: {
                width: sizes.xl,
                height: sizes.xl,
              },
            }),
          },
          styles.iconButton,
          props,
          style,
        ]}
      >
        {(name || icon) && (
          <Icon
            isMaterialIcon={isMaterialIcon}
            name={name || icon?.name!}
            size={size}
            iconSize={iconSize}
            {...icon}
            color={icon?.color || color}
          />
        )}
        {imageProps && <Image {...imageProps} />}
        {title && (
          <Typography
            textTransform="capitalize"
            {...titleProps}
            fontColor={fontColor}
          >
            {title}
          </Typography>
        )}
      </View>
    );

    const renderLinearGradient = () => (
      <LinearGradient
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        colors={[palette.green, palette.primary]}
        {...gradientProps}
        style={[styles.gradientIconButton, gradientProps?.style]}
      >
        {renderContent()}
      </LinearGradient>
    );

    return (
      <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
        {variant === 'gradient' ? renderLinearGradient() : renderContent()}
      </TouchableOpacity>
    );
  }
);

export default memo(IconButton);
