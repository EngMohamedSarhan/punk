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
    name: 'Home',
  },
  {
    sharp: 'ios-heart-sharp',
    outline: 'ios-heart-outline',
    name: 'Product',
  },
  {
    outline: 'scan',
    isGradient: true,
  },
  {
    sharp: 'cart-sharp',
    outline: 'cart-outline',
  },
  {
    sharp: 'person-circle-sharp',
    outline: 'person-circle-outline',
  },
];
