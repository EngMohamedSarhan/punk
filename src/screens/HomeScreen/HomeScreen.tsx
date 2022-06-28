import React, { FC, memo } from 'react';
import { View } from 'react-native';

import { INavigationProp } from '../../constants/types';
import styles from '../../styles/styles';

const HomeScreen: FC<INavigationProp> = memo(({ navigation }) => {
  return <View style={styles.container}></View>;
});

export default HomeScreen;
