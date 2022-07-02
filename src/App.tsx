import 'react-native-gesture-handler';

import React from 'react';

import AppNavigator from './components/AppNavigator/AppNavigator';
import CartProvider from './components/CartProvider/CartProvider';
import NotificationProvider from './components/NotificationProvider/NotificationProvider';
import ProductProvider from './components/ProductProvider/ProductProvider';

const App = () => (
  <NotificationProvider>
    <CartProvider>
      <ProductProvider>
        <AppNavigator />
      </ProductProvider>
    </CartProvider>
  </NotificationProvider>
);

export default App;
