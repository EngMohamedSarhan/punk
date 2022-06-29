import { NavigationProp } from '@react-navigation/native';

export interface INavigationProp {
  navigation: NavigationProp<any>;
}

export interface IBeer {
  id: number;
  name: string;
  description: string;
  image_url: string;
  abv: number;
  ibu: number;
  target_fg: number;
  target_og: number;
  ebc?: number;
}
