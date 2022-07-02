import React, { FC, memo } from 'react';
import { View, ViewProps } from 'react-native';

import { INavigationProp } from '../../constants/types';
import styles from '../../styles/styles';
import IconButton, { IIconButtonProps } from '../IconButton/IconButton';

export interface IHeaderButtonsProps extends INavigationProp, ViewProps {
  backProps?: IIconButtonProps;
  buttonsProps?: IIconButtonProps;
}

const HeaderButtons: FC<IHeaderButtonsProps> = memo(
  ({
    navigation: { goBack },
    backProps,
    buttonsProps,
    children,
    style,
    ...props
  }) => (
    <View {...props} style={[styles.headerContainer, style]}>
      <IconButton
        variant="square"
        color="primary"
        name="chevron-back"
        onPress={goBack}
        {...backProps}
      />
      {children}
      {buttonsProps && <IconButton {...buttonsProps} />}
    </View>
  )
);

export default HeaderButtons;
