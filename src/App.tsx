import 'react-native-gesture-handler';

import React from 'react';

import AppNavigator from './components/AppNavigator/AppNavigator';
import NotificationProvider from './components/NotificationProvider/NotificationProvider';
import ProductProvider from './components/ProductProvider/ProductProvider';

const App = () => (
  <NotificationProvider>
    <ProductProvider>
      <AppNavigator />
    </ProductProvider>
  </NotificationProvider>
);

export default App;
