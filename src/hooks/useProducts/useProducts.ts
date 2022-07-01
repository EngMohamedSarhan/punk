import { Dispatch, SetStateAction, useRef, useState } from 'react';

import { IProduct } from '../../constants/types';
import axios from '../../scripts/axios';

const useProducts = (setIsLoading: Dispatch<SetStateAction<boolean>>) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const page = useRef(0);

  const getProducts = () => {
    page.current += 1;
    setIsLoading(true);
    axios
      .get(`/beers?page=${page.current}&per_page=10`)
      .then(({ data }) => {
        if (page.current !== 1) {
          setProducts(products.concat(data));
        } else {
          setProducts(data);
        }
      })
      .finally(() => setIsLoading(false));
  };

  return { products, getProducts };
};

export default useProducts;
