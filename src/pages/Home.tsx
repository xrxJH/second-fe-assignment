import { Button } from '@components/common/Button';
import { PATH } from '@constants/path';
import { flexColumn } from '@styles/customStyles';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { ReactComponent as LogoLarge } from '@assets/logo-L.svg';

export const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToOrder = () => {
    navigate(PATH.ORDER);
  };

  return (
    <Wrapper>
      <ColumnBox>
        <LogoLarge />
        <Button variant="default" onClick={handleNavigateToOrder}>
          주문하러 가기
        </Button>
      </ColumnBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme: { colors } }) => colors.black};
  ${flexColumn};
  align-items: center;
  justify-content: center;
`;

const ColumnBox = styled.div`
  ${flexColumn};
  align-items: center;
  justify-content: center;
  gap: 41px;

`;