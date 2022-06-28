import React, { FC, memo } from 'react';
import { IconProps } from 'react-native-vector-icons/Icon';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Materialicon from 'react-native-vector-icons/MaterialIcons';

import { IconSize, iconSizes } from '../../styles/sizes';
import { Color, palette } from '../../styles/palette';

export interface IIconProps extends IconProps {
  color?: Color;
  iconSize?: IconSize;
  isMaterialIcon?: boolean;
}

const Icon: FC<IIconProps> = memo(
  ({ isMaterialIcon, color = 'gray', size, iconSize, ...props }) => {
    const iconProps = {
      ...props,
      color: palette[color],
      size: size || iconSizes[iconSize || 'sm'],
    };

    return isMaterialIcon ? (
      <Materialicon {...iconProps} />
    ) : (
      <Ionicon {...iconProps} />
    );
  }
);

export default Icon;
