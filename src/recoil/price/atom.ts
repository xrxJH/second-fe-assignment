import { atom, atomFamily } from 'recoil';

export const priceIdsState = atom<string[]>({
  key: 'priceIdsState',
  default: [],
});

export const priceStateFamily = atomFamily({
  key: 'priceStateFamily',
  default: 0,
});

export const totalPriceState = atom({
  key: 'totalPriceState',
  default: 0,
});
