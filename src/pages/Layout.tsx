import { flexRow } from '@styles/customStyles';
import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';

export const Layout = () => {
  return (
    <Wrapper>
      <Body>
        <Outlet />
      </Body>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100dvw;
  height: 100dvh;
  overflow: hidden;

  ${flexRow};
  justify-content: center;
  align-items: center;
`;

const Body = styled.div`
  width: 350px;
  height: 100%;
`;
