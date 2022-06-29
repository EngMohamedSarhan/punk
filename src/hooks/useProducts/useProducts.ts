import { Dispatch, SetStateAction, useRef, useState } from 'react';
import { IProduct } from '../../constants/types';
import axios from '../../scripts/axios';

const useProducts = (setIsLoading: Dispatch<SetStateAction<boolean>>) => {
  const [Products, setProducts] = useState<IProduct[]>([]);
  const page = useRef(0);

  const getProducts = (isRefresh?: boolean) => {
    if (isRefresh) {
      page.current = 1;
    } else {
      page.current += 1;
    }
    setIsLoading(true);
    axios
      .get(`/beers?page=${page.current}&per_page=10`)
      .then(({ data }) => {
        if (page.current !== 1) {
          setProducts(Products.concat(data));
        } else {
          setProducts(data);
        }
      })
      .finally(() => setIsLoading(false));
  };

  return { Products, getProducts };
};

export default useProducts;
