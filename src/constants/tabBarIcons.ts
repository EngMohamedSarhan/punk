import { CART_SCREEN_NAME, HOME_SCREEN_NAME } from './screens';

export interface ITabBarIcon {
  outline: string;
  sharp?: string;
  name?: string;
  isGradient?: boolean;
}

export const tabBarIcons: ITabBarIcon[] = [
  {
    sharp: 'home-sharp',
    outline: 'home-outline',
    name: HOME_SCREEN_NAME,
  },
  {
    sharp: 'ios-heart-sharp',
    outline: 'ios-heart-outline',
  },
  {
    outline: 'scan',
    isGradient: true,
  },
  {
    sharp: 'cart-sharp',
    outline: 'cart-outline',
    name: CART_SCREEN_NAME,
  },
  {
    sharp: 'person-circle-sharp',
    outline: 'person-circle-outline',
  },
];
