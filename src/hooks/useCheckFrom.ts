import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const useCheckFrom = (path: string, replace: boolean = false) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.from !== 'order') {
      navigate(path, { replace });
    }
  }, []);
};
