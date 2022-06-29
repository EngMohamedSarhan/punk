import React, { FC, Fragment, memo, useEffect, useState } from 'react';
import { ListRenderItemInfo, RefreshControl, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import BeerCard from '../../components/BeerCard/BeerCard';
import CategoryTypography from '../../components/CategoryTypography/CategoryTypography';
import LinearActivityIndicator from '../../components/LinearActivityIndicator/LinearActivityIndicator';
import Search from '../../components/Search/Search';
import User from '../../components/User/User';
import { profileImg } from '../../constants/images';
import { IBeer, INavigationProp } from '../../constants/types';
import useBeers from '../../hooks/useBeers/useBeers';
import { palette } from '../../styles/palette';
import styles from '../../styles/styles';

const HomeScreen: FC<INavigationProp> = memo(() => {
  const [isLoading, setIsLoading] = useState(false);
  const { beers, getBeers } = useBeers(setIsLoading);

  const keyExtractor = (item: IBeer) => item.id.toString();

  const handleBeers = () => getBeers();

  const renderItem = ({ item }: ListRenderItemInfo<IBeer>) => (
    <BeerCard beer={item} />
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => getBeers(), []);

  return (
    <Fragment>
      {isLoading && <LinearActivityIndicator position="absolute" />}
      <View style={styles.screen}>
        <User name="mohamed khaled" image={profileImg} />
        <Search />
        <CategoryTypography isSelected>all</CategoryTypography>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={beers}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          refreshControl={
            <RefreshControl colors={[palette.primary]} refreshing={isLoading} />
          }
          ItemSeparatorComponent={() => <View style={styles.divider} />}
          contentContainerStyle={styles.miniseparator}
          onEndReached={handleBeers}
        />
      </View>
    </Fragment>
  );
});

export default HomeScreen;
