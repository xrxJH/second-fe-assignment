import { flexColumn } from '@styles/customStyles';
import { styled } from 'styled-components';

export const Complete = () => {
  return (
    <Wrapper>
      <ColumnBox>
        logo
        <HelpText>주문이 완료되었습니다.</HelpText>
      </ColumnBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme: { colors } }) => colors.white};
  ${flexColumn};
  align-items: center;
  justify-content: center;
`;

const ColumnBox = styled.div`
  ${flexColumn};
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

const HelpText = styled.p`
  font: ${({ theme: { fonts } }) => fonts.displayM};
`;
