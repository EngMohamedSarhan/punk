import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React, { FC, memo } from 'react';
import { View } from 'react-native';
import { tabBarIcons } from '../../constants/tabBarIcons';

import styles from '../../styles/styles';
import IconButton from '../IconButton/IconButton';

const TabBar: FC<BottomTabBarProps> = memo(
  ({ navigation, state: { index } }) => {
    const renderTabs = () =>
      tabBarIcons.map(({ sharp, outline, name, isGradient }, i) => {
        const isFocused = index === 0 && i === 0;

        return (
          <IconButton
            key={outline}
            name={isFocused ? sharp : outline}
            color={isFocused ? 'primaryFont' : undefined}
            variant={isGradient ? 'gradient' : undefined}
            iconSize={isGradient ? 'sm' : 'md'}
            onPress={name ? () => navigation.navigate(name) : undefined}
          />
        );
      });

    return <View style={styles.tabBar}>{renderTabs()}</View>;
  }
);

export default TabBar;
