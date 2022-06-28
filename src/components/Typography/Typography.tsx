import React, { FC, memo } from 'react';
import { Text, TextProps, TextStyle } from 'react-native';

import {
  fontFamilies,
  FontFamily,
  FontSize,
  fontSizes,
} from '../../styles/fonts';
import { FontColor, palette } from '../../styles/palette';

export interface ITypographyProps extends TextProps, TextStyle {
  fontColor?: FontColor;
  fontFamily?: FontFamily;
  size?: FontSize;
}

const Typography: FC<ITypographyProps> = memo(
  ({
    children,
    style,
    numberOfLines,
    fontColor = 'secondaryFont',
    textBreakStrategy,
    color = palette[fontColor],
    fontFamily = 'primary',
    size = 'md',
    ellipsizeMode = 'tail',
    ...props
  }) => (
    <Text
      {...props}
      ellipsizeMode={ellipsizeMode}
      numberOfLines={numberOfLines}
      textBreakStrategy={textBreakStrategy}
      style={[
        {
          color,
          fontFamily: fontFamilies[fontFamily],
          fontSize: fontSizes[size],
        },
        props,
        style,
      ]}
    >
      {children}
    </Text>
  )
);

export default Typography;
