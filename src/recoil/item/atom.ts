import { getItems } from '@service/item/item';
import { atom, selector } from 'recoil';

export const itemState = atom<Item[]>({
  key: 'itemState',
  default: [],
});

export const itemQuery = selector({
  key: 'itemQuery',
  get: async () => {
    const delay = (duration: number) =>
      new Promise((resolve) => setTimeout(resolve, duration));
    await delay(1000);

    const data = await getItems();
    return data;
  },
});
