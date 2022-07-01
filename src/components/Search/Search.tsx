import React, { FC, memo, useContext } from 'react';
import { View, ViewProps } from 'react-native';
import NotificationContext from '../../context/NotificationContext';

import { palette } from '../../styles/palette';
import { sizes } from '../../styles/sizes';
import styles from '../../styles/styles';
import IconButton from '../IconButton/IconButton';
import Input from '../Input/Input';

const Search: FC<ViewProps> = memo(({ style, ...props }) => {
  const { pushNotification } = useContext(NotificationContext)!;

  const handlePress = () => pushNotification('Feature is not implemented.');

  return (
    <View
      {...props}
      style={[styles.horizontalContainer, styles.separator, style]}
    >
      <Input
        flex={1}
        editable={false}
        paddingVertical={sizes.md}
        placeholder="Search Products"
        startAdornment={<IconButton name="search" color="dark" />}
      />
      <IconButton
        variant="square"
        name="options-outline"
        color="primary"
        iconSize="lg"
        backgroundColor={palette.light}
        flex={1}
        marginLeft={sizes['5xl']}
        onPress={handlePress}
      />
    </View>
  );
});

export default Search;
