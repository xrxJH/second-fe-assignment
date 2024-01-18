import { styled } from 'styled-components';
import { ReactComponent as LogoSmall } from '@assets/logo-S.svg';

export const TopHeader = () => {
  return (
    <Wrapper>
      <LogoSmall />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  width: 350px;
  height: 57px;
  padding: 12px;
  background: ${({ theme: { colors } }) => colors.black};
  box-shadow: 0px 10px 7px -7px rgba(0, 0, 0, 0.25);

  color: ${({ theme: { colors } }) => colors.white}; //TODO 빼기
`;
