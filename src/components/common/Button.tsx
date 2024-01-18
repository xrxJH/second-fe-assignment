import { flexRow } from '@styles/customStyles';
import { styled } from 'styled-components';

type Props = {
  variant: 'default' | 'withState' | 'text';
  isDisabled?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
};

export const Button = ({ variant, isDisabled, children, onClick }: Props) => {
  const Shape = SHAPE_VARIANT[variant];
  return (
    <Shape
      variant={variant}
      isDisabled={isDisabled}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </Shape>
  );
};

const BaseWrapper = styled.button.attrs({ type: 'button' })<Props>`
  transition: all 0.2s ease-in-out;
  &:hover {
    opacity: 0.7;
    transform: scale(0.98);
  }
`;

const DefaultWrapper = styled(BaseWrapper)`
  padding: 22px 11px 21px 11px;
  border-radius: ${({ theme: { radius } }) => radius.large20};
  background: ${({ theme: { colors } }) => colors.white};
  font: ${({ theme: { fonts } }) => fonts.displayL};
`;

const WithStateWrapper = styled(BaseWrapper)`
  width: 301px;
  height: 47.919px;
  background: ${({ theme: { colors }, isDisabled }) =>
    isDisabled ? colors.bgDisabled : colors.black};
  color: ${({ theme: { colors } }) => colors.textWhite};
  font: ${({ theme: { fonts } }) => fonts.displayM};
  ${flexRow};
  justify-content: center;
  align-items: center;
  cursor: ${({ isDisabled }) => (isDisabled ? 'default' : 'pointer')};
  &:hover {
    opacity: 1;
    transform: scale(1);
  }
`;

const TextWrapper = styled(BaseWrapper)`
  ${flexRow};
  cursor: ${({ isDisabled }) => (isDisabled ? 'default' : 'pointer')};
  align-items: center;
  white-space: nowrap;
  padding: 4px;
  background-color: transparent;
  color: ${({ theme: { colors }, isDisabled }) =>
    isDisabled ? colors.bgDisabled : colors.textBlack};

  &:hover {
    background-color: ${({ theme: { colors } }) => colors.gray};
  }
`;

const SHAPE_VARIANT = {
  default: DefaultWrapper,
  withState: WithStateWrapper,
  text: TextWrapper,
};
