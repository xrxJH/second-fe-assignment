import { END_POINT } from '@constants/endpoint';
import { fetcher } from '@service/fetcher';
import { atom, selector } from 'recoil';

export const itemState = atom<Item[]>({
  key: 'itemState',
  default: [],
});

export const itemQuery = selector({
  key: 'itemQuery',
  get: async () => {
    const data = await fetcher.get(END_POINT.items);
    // 필요한 경우 여기에서 data를 가공하여 반환
    return data;
  },
});
