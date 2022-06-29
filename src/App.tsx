import 'react-native-gesture-handler';

import React from 'react';

import AppNavigator from './components/AppNavigator/AppNavigator';
import ProductProvider from './components/ProductProvider/ProductProvider';

const App = () => (
  <ProductProvider>
    <AppNavigator />
  </ProductProvider>
);

export default App;
