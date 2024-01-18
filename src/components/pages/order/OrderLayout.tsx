import { flexColumn } from '@styles/customStyles';
import { styled } from 'styled-components';
import { TopHeader } from './Header';
import { Panel } from './Panel';

type Props = {
  children: React.ReactNode;
};

export const OrderLayout = ({ children }: Props) => {
  return (
    <Wrapper>
      <TopHeader />
      {children}
      <Panel />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  ${flexColumn};
  justify-content: space-between;
  align-items: center;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
