import { atom, atomFamily } from 'recoil';

export const counterIdsState = atom<string[]>({
  key: 'counterIdsState',
  default: [],
});

export const counterStateFamily = atomFamily<number, string>({
  key: 'counterStateFamily',
  default: 0,
});
