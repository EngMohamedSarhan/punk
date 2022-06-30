import React, { FC, memo, ReactNode, useState } from 'react';
import { IProduct } from '../../constants/types';
import ProductContext from '../../context/ProductContext';

export interface IProductProviderProps {
  children?: ReactNode;
}

const ProductProvider: FC<IProductProviderProps> = memo(({ children }) => {
  const [product, setProduct] = useState<IProduct>();

  return (
    <ProductContext.Provider value={{ product, setProduct }}>
      {children}
    </ProductContext.Provider>
  );
});

export default ProductProvider;
