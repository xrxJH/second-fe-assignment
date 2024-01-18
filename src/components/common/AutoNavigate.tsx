import { PATH } from '@constants/path';
import { useCheckFrom } from '@hooks/useCheckFrom';
import { useSetTimeoutNavigate } from '@hooks/useSetTimeout';
type Props = {
  children: React.ReactNode;
};

export const AutoNavigateToHome = ({ children }: Props) => {
  useCheckFrom(PATH.HOME, true);
  useSetTimeoutNavigate(PATH.HOME, 3000, true);
  return <>{children}</>;
};
