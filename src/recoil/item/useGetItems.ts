import { useCallback, useEffect, useState } from 'react';
import { useRecoilState, useRecoilValueLoadable } from 'recoil';

import { itemQuery, itemState } from './atom';

export const useGetItems = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [items, setItems] = useRecoilState<Item[]>(itemState);

  const itemResponse = useRecoilValueLoadable(itemQuery);

  const requestFetchItems = useCallback((): void => {
    if (itemResponse === null || itemResponse === undefined) {
      return;
    }

    switch (itemResponse.state) {
      case 'loading':
        setIsLoading(true);
        break;

      case 'hasValue':
        setIsLoading(false);
        setItems(itemResponse.contents);
        break;

      case 'hasError':
        setIsError(false);
        setIsLoading(false);
        break;

      default:
        return;
    }
  }, [setItems, itemResponse]);

  useEffect(() => {
    requestFetchItems();
  }, [requestFetchItems]);

  return {
    isLoading,
    isError,
    items,
  };
};
