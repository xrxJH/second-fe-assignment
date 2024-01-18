import { styled } from 'styled-components';
import { createPortal } from 'react-dom';
import { forwardRef } from 'react';

type Props = {
  children: React.ReactNode;
};

export const Modal = forwardRef<HTMLDialogElement, Props>(
  ({ children }, ref) => {
    return createPortal(
      <Wrapper ref={ref}>{children}</Wrapper>,
      document.getElementById('modal') as HTMLElement
    );
  }
);

const Wrapper = styled.dialog`
  width: 300px;
  height: 200px;
  background: ${({ theme: { colors } }) => colors.white};
  border-radius: ${({ theme: { radius } }) => radius.medium15};
  box-shadow: inset 0px -10px 18px 1px rgba(0, 0, 0, 0.18);
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.gray};
`;
