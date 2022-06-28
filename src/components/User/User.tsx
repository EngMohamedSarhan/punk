import React, { FC, memo } from 'react';
import { Image, ImageSourcePropType, View, ViewProps } from 'react-native';
import { sizes } from '../../styles/sizes';

import styles from '../../styles/styles';
import Typography from '../Typography/Typography';

export interface IUserProps extends ViewProps {
  name?: string;
  image?: ImageSourcePropType;
}

const User: FC<IUserProps> = memo(({ name, image, style, ...props }) => (
  <View {...props} style={[styles.horizontalContainer, style]}>
    <View style={styles.flex}>
      <Typography size="lg">Welcome</Typography>
      {name && (
        <Typography
          fontColor="primaryFont"
          fontWeight="700"
          size="xxl"
          textTransform="capitalize"
          marginTop={sizes.xxs}
        >
          {name}
        </Typography>
      )}
    </View>
    {image && <Image source={image} style={styles.profileImage} />}
  </View>
));

export default User;
