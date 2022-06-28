import React, { FC, memo } from 'react';
import { View } from 'react-native';

import User from '../../components/User/User';
import { profileImg } from '../../constants/images';
import { INavigationProp } from '../../constants/types';
import styles from '../../styles/styles';

const HomeScreen: FC<INavigationProp> = memo(() => {
  return (
    <View style={styles.screen}>
      <User name="mohamed khaled" image={profileImg} />
    </View>
  );
});

export default HomeScreen;
