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

  color: ${({ theme: { colors } }) =>
    colors.white}; // Todo logo 추가시 지워야함
`;

// const Button = styled.div`
//   width: 172px;
//   height: 88px;
//   cursor: pointer;
//   background: ${({ theme: { colors } }) => colors.white};
//   border-radius: ${({ theme: { radius } }) => radius.large20};
//   color: ${({ theme: { colors } }) => colors.black};
//   font: ${({ theme: { fonts } }) => fonts.displayL};

//   ${flexColumn};
//   align-items: center;
//   justify-content: center;
//   flex-shrink: 0;
// `;
