import React, { FC, memo } from 'react';
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';

import Search from '../../components/Search/Search';
import Typography from '../../components/Typography/Typography';
import User from '../../components/User/User';
import { profileImg } from '../../constants/images';
import { INavigationProp } from '../../constants/types';
import { sizes } from '../../styles/sizes';
import styles from '../../styles/styles';

const HomeScreen: FC<INavigationProp> = memo(() => {
  const handleKeyboard = () => Keyboard.dismiss();

  return (
    <TouchableWithoutFeedback onPress={handleKeyboard}>
      <View style={styles.screen}>
        <User name="mohamed khaled" image={profileImg} />
        <Search />
        <Typography
          marginLeft={sizes.lg}
          fontColor="primary"
          fontWeight="800"
          letterSpacing={0}
          textTransform="uppercase"
        >
          All
        </Typography>
      </View>
    </TouchableWithoutFeedback>
  );
});

export default HomeScreen;
