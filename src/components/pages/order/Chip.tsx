import { flexRow } from '@styles/customStyles';
import { styled } from 'styled-components';

type Props = {
  isEvent: boolean;
};

export const Chip = ({ isEvent }: Props) => {
  return <>{isEvent && <Wrapper>이벤트</Wrapper>}</>;
};

const Wrapper = styled.div`
  width: 53px;
  height: 23px;
  border-radius: ${({ theme: { radius } }) => radius.small10};
  background: ${({ theme: { colors } }) => colors.orange100};
  font: ${({ theme: { fonts } }) => fonts.displayS};
  color: ${({ theme: { colors } }) => colors.white};
  ${flexRow};
  justify-content: center;
  align-items: center;
`;
