import React, { FC, memo, useContext } from 'react';
import { FlatList, ListRenderItemInfo, View } from 'react-native';

import CartItem from '../../components/CartItem/CartItem';
import HeaderButtons from '../../components/HeaderButtons/HeaderButtons';
import ScreenLayout from '../../components/ScreenLayout/ScreenLayout';
import { ICartItem, INavigationProp } from '../../constants/types';
import CartContext from '../../context/CartContext';
import styles from '../../styles/styles';

const CartScreen: FC<INavigationProp> = memo(({ navigation }) => {
  const { cart } = useContext(CartContext)!;

  const handleKeyExtractor = (item: ICartItem) => item.id.toString();

  const renderSeparator = () => <View style={styles.divider} />;

  const renderItem = (item: ListRenderItemInfo<ICartItem>) => (
    <CartItem {...item} />
  );

  return (
    <ScreenLayout>
      <HeaderButtons navigation={navigation} />
      <FlatList
        data={cart}
        keyExtractor={handleKeyExtractor}
        ItemSeparatorComponent={renderSeparator}
        renderItem={renderItem}
        contentContainerStyle={[
          styles.screenPadding,
          styles.screenHeaderPadding,
        ]}
      />
    </ScreenLayout>
  );
});

export default CartScreen;
