import { selector, useRecoilState, useSetRecoilState } from 'recoil';
import { counterIdsState, counterStateFamily } from './atom';
import { useEffect } from 'react';

export const useCounter = (id: string) => {
  const [count, setCount] = useRecoilState(counterStateFamily(id));
  const setCounterIds = useSetRecoilState(counterIdsState);

  useEffect(() => {
    if (count > 0) {
      setCounterIds((oldIds) => {
        if (!oldIds.includes(id)) {
          return [...oldIds, id];
        }
        return oldIds;
      });
    } else {
      setCounterIds((oldIds) =>
        oldIds.filter((existingId) => existingId !== id)
      );
    }
  }, [count, id, setCounterIds]);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  return {
    count,
    increase,
    decrease,
  };
};

export const totalCounterValue = selector({
  key: 'countSelector',
  get: ({ get }) => {
    const counterIds = get(counterIdsState);

    return counterIds.reduce((total: number, id: string) => {
      return total + get(counterStateFamily(id));
    }, 0);
  },
});
