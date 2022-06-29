import React, { FC, memo } from 'react';
import { View, ViewProps } from 'react-native';
import Star from 'react-native-star-view';

import { sizes } from '../../styles/sizes';
import styles from '../../styles/styles';
import Typography from '../Typography/Typography';

export interface IStarRatingProps extends ViewProps {
  score: number;
  totalScore?: number;
}

const StarRating: FC<IStarRatingProps> = memo(({ score, style, ...props }) => (
  <View {...props} style={[styles.starRating, style]}>
    <Star score={score} {...props} />
    <Typography
      marginLeft={sizes.md}
      letterSpacing={0}
      size="sm"
      fontWeight="800"
    >{`(${score.toFixed(1)})`}</Typography>
  </View>
));

export default StarRating;
