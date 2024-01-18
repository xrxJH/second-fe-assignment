import { flexColumn } from '@styles/customStyles';
import { styled } from 'styled-components';

export const Loading = () => {
  return (
    <Wrapper>
      <ColumnBox>
        <HelpText>목록을</HelpText>
        <HelpText>불러오고있습니다.</HelpText>
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
  color: ${({ theme: { colors } }) => colors.textBlack};
`;
