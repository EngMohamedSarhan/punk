import { createContext, Dispatch, SetStateAction } from 'react';
import { IProduct } from '../constants/types';

export interface IProductContext {
  product?: IProduct;
  setProduct: Dispatch<SetStateAction<IProduct | undefined>>;
}

const ProductContext = createContext<IProductContext | null>(null);

export default ProductContext;
