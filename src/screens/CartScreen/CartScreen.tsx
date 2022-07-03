import React, { FC, memo, useContext } from 'react';
import { FlatList, ListRenderItemInfo, View } from 'react-native';

import CartFooter from '../../components/CartFooter/CartFooter';
import Error from '../../components/Error/Error';
import HeaderButtons from '../../components/HeaderButtons/HeaderButtons';
import ScreenLayout from '../../components/ScreenLayout/ScreenLayout';
import SwipeableCartItem from '../../components/SwipeableCartItem/SwipeableCartItem';
import { ICartItem, INavigationProp } from '../../constants/types';
import CartContext from '../../context/CartContext';
import { sizes } from '../../styles/sizes';
import styles from '../../styles/styles';

const CartScreen: FC<INavigationProp> = memo(({ navigation }) => {
  const { cart } = useContext(CartContext)!;

  const handleKeyExtractor = (item: ICartItem) => item.id.toString();

  const renderSeparator = () => <View style={styles.divider} />;

  const renderEmpty = () => <Error isAnimated title=" Your Cart is Empty!" />;

  const renderFooter = () =>
    cart.length ? <CartFooter style={[styles.screenPadding]} /> : null;

  const renderItem = (item: ListRenderItemInfo<ICartItem>) => (
    <SwipeableCartItem
      {...item}
      navigation={navigation}
      paddingVertical={sizes.lg}
      style={styles.screenHorizontalPadding}
    />
  );

  return (
    <ScreenLayout>
      <HeaderButtons navigation={navigation} />
      <FlatList
        data={cart}
        keyExtractor={handleKeyExtractor}
        ItemSeparatorComponent={renderSeparator}
        renderItem={renderItem}
        ListEmptyComponent={renderEmpty}
        ListFooterComponent={renderFooter}
        contentContainerStyle={[
          styles.screenHeaderPadding,
          styles.screenVerticalPadding,
        ]}
      />
    </ScreenLayout>
  );
});

export default CartScreen;
