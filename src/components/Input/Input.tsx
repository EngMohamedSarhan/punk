import React, { forwardRef, ReactNode } from 'react';
import { TextInput, TextInputProps, View, ViewStyle } from 'react-native';

import { fontFamilies, FontFamily, fontSizes } from '../../styles/fonts';
import { Color, FontColor, palette } from '../../styles/palette';
import { sizes } from '../../styles/sizes';

export interface IInputProps extends TextInputProps, ViewStyle {
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  isFullWidth?: boolean;
  isValidated?: boolean;
  marginTop?: number;
  paddingVertical?: number;
  color?: Color;
  fontColor?: FontColor;
  fontSize?: number;
  fontFamily?: FontFamily;
  placeholderFontSize?: number;
}

const Input = forwardRef<TextInput, IInputProps>(
  (
    {
      startAdornment,
      endAdornment,
      isFullWidth,
      maxWidth,
      height,
      maxHeight,
      style,
      placeholder,
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
      paddingHorizontal = sizes.sm,
      paddingLeft,
      paddingRight,
      paddingStart,
      paddingTop,
      backgroundColor = palette.white,
      editable,
      elevation,
      borderColor = palette.white,
      fontFamily = 'primary',
      fontColor = 'secondaryFont',
      width = isFullWidth ? '100%' : undefined,
      flexDirection = 'row',
      alignItems = 'center',
      fontSize = fontSizes.md,
      borderWidth = sizes.xxs,
      borderRadius = sizes.xxl,
      ...props
    },
    ref
  ) => {
    const textStyle = {
      borderRadius,
      flex: 1,
      paddingVertical: 0,
      backgroundColor,
      fontSize,
      color: palette[fontColor],
      fontFamily: fontFamilies[fontFamily],
    };

    return (
      <View
        style={[
          props,
          {
            elevation,
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
            flexDirection,
            alignItems,
            width,
            maxWidth,
            height,
            maxHeight,
            borderWidth,
            backgroundColor,
            borderRadius,
            borderColor,
          },
        ]}
      >
        {startAdornment}
        <TextInput
          {...props}
          ref={ref}
          placeholder={placeholder}
          editable={editable}
          style={[textStyle, style]}
        />
        {endAdornment}
      </View>
    );
  }
);

export default Input;
