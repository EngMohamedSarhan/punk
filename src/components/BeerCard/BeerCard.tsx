import React, { FC, memo } from 'react';
import { Image, View, ViewProps, ViewStyle } from 'react-native';

import { IBeer } from '../../constants/types';
import { DOLLAR_UNICODE } from '../../constants/unicodes';
import { sizes } from '../../styles/sizes';
import styles from '../../styles/styles';
import IconButton from '../IconButton/IconButton';
import Typography from '../Typography/Typography';

export interface IBeerCardProps extends ViewProps, ViewStyle {
  beer: IBeer;
}

const BeerCard: FC<IBeerCardProps> = memo(
  ({ beer: { image_url, name, ebc }, style, ...props }) => (
    <View {...props} style={[style, styles.beerCard, props]}>
      <Image
        source={{ uri: image_url }}
        resizeMode="contain"
        style={styles.beerImage}
      />
      <Typography
        marginTop={sizes.lg}
        fontColor="primaryFont"
        fontWeight="800"
        numberOfLines={1}
      >
        {name}
      </Typography>
      <Typography size="sm" marginTop={sizes.md}>
        Beer
      </Typography>
      <Typography
        fontColor="primary"
        marginTop={sizes.md}
        fontWeight="800"
        letterSpacing={-0.5}
      >
        {`${DOLLAR_UNICODE}${(ebc || 20).toFixed(2)}`}
      </Typography>
      <IconButton
        isMaterialIcon
        name="add"
        iconSize="md"
        color="white"
        style={styles.beerButton}
      />
    </View>
  )
);

export default BeerCard;
