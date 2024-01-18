import { selector, useRecoilState } from 'recoil';
import { priceStateFamily } from './atom';
import { counterIdsState, counterStateFamily } from '@recoil/counter/atom';

export const useItemPrice = (id: string, priceData: number) => {
  const [, setPrice] = useRecoilState(priceStateFamily(id));
  setPrice(priceData);
  console.log('priceData', priceData);
};

export const totalPriceSelector = selector({
  key: 'totalPriceSelector',
  get: ({ get }) => {
    const itemIds = get(counterIdsState);
    return itemIds.reduce((total: number, id: string) => {
      const count = get(counterStateFamily(id));
      const price = get(priceStateFamily(id));
      return total + count * price;
    }, 0);
  },
});
