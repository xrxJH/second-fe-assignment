import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useSetTimeoutNavigate = (
  path: string,
  delay = 3000,
  replace: boolean = false
) => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(path, { replace });
    }, delay);

    return () => clearTimeout(timer);
  }, [path, delay, replace]);
};
