import React, { FC, Fragment, memo, ReactNode, useContext } from 'react';
import { FlatList, ListRenderItemInfo, View, ViewProps } from 'react-native';

import NotificationContext from '../../context/NotificationContext';
import styles from '../../styles/styles';
import SnackBar from '../SnackBar/SnackBar';

export interface IScreenLayoutProps extends ViewProps {
  children?: ReactNode;
}

const ScreenLayout: FC<IScreenLayoutProps> = memo(
  ({ children, style, ...props }) => {
    const { notifications, removeNotification } =
      useContext(NotificationContext)!;

    const handleKeyExtractor = (item: string) => item;

    const renderSeparator = () => <View style={styles.square} />;

    const renderItem = ({ item }: ListRenderItemInfo<string>) => (
      <SnackBar
        isOpen={true}
        key={item}
        text={item}
        style={[styles.screenHorizontalPadding]}
        onHide={() => removeNotification(item)}
      />
    );

    return (
      <Fragment>
        <View style={styles.notificationsContainer}>
          <FlatList
            data={notifications}
            renderItem={renderItem}
            keyExtractor={handleKeyExtractor}
            ItemSeparatorComponent={renderSeparator}
            contentContainerStyle={
              notifications.length ? styles.hugeVerticalPadding : undefined
            }
          />
        </View>
        <View {...props} style={[styles.defaultScreen, style]}>
          {children}
        </View>
      </Fragment>
    );
  }
);

export default ScreenLayout;
