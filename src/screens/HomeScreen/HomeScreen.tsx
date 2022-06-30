import React, { FC, Fragment, memo, useEffect, useState } from 'react';
import { ListRenderItemInfo, RefreshControl, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import CategoryTypography from '../../components/CategoryTypography/CategoryTypography';
import LinearActivityIndicator from '../../components/LinearActivityIndicator/LinearActivityIndicator';
import ProductCard from '../../components/ProductCard/ProductCard';
import Search from '../../components/Search/Search';
import User from '../../components/User/User';
import { profileImg } from '../../constants/images';
import { INavigationProp, IProduct } from '../../constants/types';
import useProducts from '../../hooks/useProducts/useProducts';
import { palette } from '../../styles/palette';
import styles from '../../styles/styles';

const HomeScreen: FC<INavigationProp> = memo(({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { Products, getProducts } = useProducts(setIsLoading);

  const keyExtractor = (item: IProduct) => item.id.toString();

  const handleProducts = () => getProducts();

  const renderSeparator = () => <View style={styles.divider} />;

  const renderItem = ({ item }: ListRenderItemInfo<IProduct>) => (
    <ProductCard product={item} navigation={navigation} />
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(handleProducts, []);

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
          snapToAlignment="end"
          data={Products}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          refreshControl={
            <RefreshControl colors={[palette.primary]} refreshing={isLoading} />
          }
          ItemSeparatorComponent={renderSeparator}
          contentContainerStyle={styles.miniseparator}
          onEndReached={handleProducts}
        />
      </View>
    </Fragment>
  );
});

export default HomeScreen;
