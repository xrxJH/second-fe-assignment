import { PATH } from '@constants/path';
import { useResetRecoilContext } from '@context/resetRecoilContext';
import { useNavigate } from 'react-router-dom';
import { useState, useRef } from 'react';
import { randomizeOrderResult } from '@utils/randomizeOrderResult';

export const useTriggerOrder = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const timeoutRef = useRef<number | null>(null);
  const updateKey = useResetRecoilContext();

  const clearAndRestartTimer = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = window.setTimeout(() => {
      if (randomizeOrderResult()) {
        navigate(PATH.COMPLETE, { state: { from: 'order' }, replace: true });
      } else {
        navigate(PATH.ERROR, { state: { from: 'order' }, replace: true });
      }
      updateKey();
    }, 3000);
  };

  const triggerOrder = () => {
    setIsLoading(true);
    clearAndRestartTimer();
  };

  return {
    isOrderLoading: isLoading,
    triggerOrder,
    clearTimer: () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    },
  };
};
