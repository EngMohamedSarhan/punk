import CartScreen from '../screens/CartScreen/CartScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ProductScreen from '../screens/ProductScreen/ProductScreen';

export const HOME_SCREEN_NAME = 'Home';

export const PRODUCT_SCREEN_NAME = 'Product';

export const CART_SCREEN_NAME = 'Cart';

const screens = [
  {
    name: HOME_SCREEN_NAME,
    component: HomeScreen,
  },
  {
    name: PRODUCT_SCREEN_NAME,
    component: ProductScreen,
  },
  {
    name: CART_SCREEN_NAME,
    component: CartScreen,
  },
];

export default screens;
