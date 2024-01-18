import { Button } from '@components/common/Button';
import { useCounter } from '@recoil/counter/counter';
import { flexRow } from '@styles/customStyles';
import { styled } from 'styled-components';

type Props = {
  id: string;
};
export const ItemCounter = ({ id }: Props) => {
  const { count, increase, decrease } = useCounter(id);

  const handleIncrease = () => {
    if (count < 999) {
      increase();
    }
  };

  const handleDecrease = () => {
    if (count > 0) {
      decrease();
    }
  };

  return (
    <Wrapper>
      <Button variant="text" onClick={handleDecrease} isDisabled={count === 0}>
        <Text>-</Text>
      </Button>
      <Count>{count}</Count>
      <Button variant="text" onClick={handleIncrease} isDisabled={count > 998}>
        <Text>+</Text>
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${flexRow};
  align-items: center;
  gap: 8px;
`;

const Count = styled.p`
  font: ${({ theme: { fonts } }) => fonts.displayM};
  cursor: default;
`;

const Text = styled.p`
  font: ${({ theme: { fonts } }) => fonts.displayM};
`;
