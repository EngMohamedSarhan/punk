import React, { FC, Fragment, memo, ReactNode } from 'react';
import { View, ViewProps } from 'react-native';

import styles from '../../styles/styles';
import Notifications from '../Notifications/Notifications';

export interface IScreenLayoutProps extends ViewProps {
  children?: ReactNode;
}

const ScreenLayout: FC<IScreenLayoutProps> = memo(
  ({ children, style, ...props }) => (
    <Fragment>
      <Notifications />
      <View {...props} style={[styles.defaultScreen, style]}>
        {children}
      </View>
    </Fragment>
  )
);

export default ScreenLayout;
