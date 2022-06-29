import { Dispatch, SetStateAction, useRef, useState } from 'react';
import { IBeer } from '../../constants/types';
import axios from '../../scripts/axios';

const useBeers = (setIsLoading: Dispatch<SetStateAction<boolean>>) => {
  const [beers, setBeers] = useState<IBeer[]>([]);
  const page = useRef(0);

  const getBeers = (isRefresh?: boolean) => {
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
          setBeers(beers.concat(data));
        } else {
          setBeers(data);
        }
      })
      .finally(() => setIsLoading(false));
  };

  return { beers, getBeers };
};

export default useBeers;
