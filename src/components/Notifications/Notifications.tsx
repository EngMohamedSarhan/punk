import React, { FC, memo, useContext } from 'react';
import { ListRenderItemInfo, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import NotificationContext from '../../context/NotificationContext';
import styles from '../../styles/styles';
import SnackBar from '../SnackBar/SnackBar';

const Notifications: FC = memo(() => {
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
  );
});

export default Notifications;
