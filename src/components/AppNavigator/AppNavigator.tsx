import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React, { memo } from 'react';

import screens from '../../constants/screens';
import TabBar from '../TabBar/TabBar';

const { Navigator, Screen } = createBottomTabNavigator();

const AppNavigator = memo(() => {
  const renderScreens = () =>
    screens.map(({ name, component }) => (
      <Screen key={name} name={name} component={component} />
    ));

  const renderTabBar = (props: BottomTabBarProps) => <TabBar {...props} />;

  return (
    <NavigationContainer>
      <Navigator
        tabBar={renderTabBar}
        backBehavior="history"
        screenOptions={{
          header: () => null,
        }}
      >
        {renderScreens()}
      </Navigator>
    </NavigationContainer>
  );
});

export default AppNavigator;
