import { flexColumn } from '@styles/customStyles';
import { styled } from 'styled-components';

export const Error = () => {
  return (
    <Wrapper>
      <ColumnBox>
        <HelpText>주문에 실패하였습니다.</HelpText>
        <HelpText>다시 시도해주세요.</HelpText>
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
`;

const HelpText = styled.p`
  font: ${({ theme: { fonts } }) => fonts.displayM};
`;
