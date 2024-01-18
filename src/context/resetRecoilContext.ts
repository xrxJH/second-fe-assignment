import { createContext, useContext, useCallback, useState } from 'react';

const ResetRecoilContext = createContext(() => {});
const useResetRecoilContext = () => useContext(ResetRecoilContext);

const useResetRecoilByKey = () => {
  const [key, setKey] = useState('');
  const updateKey = useCallback(() => {
    setKey(crypto.randomUUID());
  }, []);

  return { key, updateKey };
};

export { ResetRecoilContext, useResetRecoilByKey, useResetRecoilContext };
