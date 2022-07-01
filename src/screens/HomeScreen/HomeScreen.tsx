import React, { FC, memo, useEffect, useState } from 'react';
import { ListRenderItemInfo, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import CategoryTypography from '../../components/CategoryTypography/CategoryTypography';
import LinearActivityIndicator from '../../components/LinearActivityIndicator/LinearActivityIndicator';
import ProductCard from '../../components/ProductCard/ProductCard';
import ScreenLayout from '../../components/ScreenLayout/ScreenLayout';
import Search from '../../components/Search/Search';
import User from '../../components/User/User';
import { profileImg } from '../../constants/images';
import { INavigationProp, IProduct } from '../../constants/types';
import useProducts from '../../hooks/useProducts/useProducts';
import styles from '../../styles/styles';

const HomeScreen: FC<INavigationProp> = memo(({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { products, getProducts } = useProducts(setIsLoading);

  const handleKeyExtractor = (item: IProduct) => item.id.toString();

  const handleProducts = () => getProducts();

  const renderSeparator = () => <View style={styles.divider} />;

  const renderItem = ({ item }: ListRenderItemInfo<IProduct>) => (
    <ProductCard product={item} navigation={navigation} />
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(handleProducts, []);

  return (
    <ScreenLayout>
      {isLoading && <LinearActivityIndicator position="absolute" />}
      <View style={styles.screen}>
        <User name="mohamed khaled" image={profileImg} />
        <Search />
        <CategoryTypography isSelected>all</CategoryTypography>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToAlignment="end"
          data={products}
          keyExtractor={handleKeyExtractor}
          renderItem={renderItem}
          ItemSeparatorComponent={renderSeparator}
          contentContainerStyle={styles.miniSeparator}
          onEndReached={handleProducts}
        />
      </View>
    </ScreenLayout>
  );
});

export default HomeScreen;
