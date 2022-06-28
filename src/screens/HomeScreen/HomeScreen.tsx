import React, { FC, memo } from 'react';
import { View } from 'react-native';

import UserHero from '../../components/UserHero/UserHero';
import { profileImg } from '../../constants/images';
import { INavigationProp } from '../../constants/types';
import styles from '../../styles/styles';

const HomeScreen: FC<INavigationProp> = memo(() => {
  return (
    <View style={styles.screen}>
      <UserHero name="mohamed khaled" image={profileImg} />
    </View>
  );
});

export default HomeScreen;
