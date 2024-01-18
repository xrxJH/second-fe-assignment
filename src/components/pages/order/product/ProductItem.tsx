import { styled } from 'styled-components';
import { Chip } from '../Chip';
import { ItemCounter } from '../ItemCounter';
import { flexColumn, flexRow } from '@styles/customStyles';
import { formatPrice } from '@utils/formatPrice';
import { useItemPrice } from '@recoil/price/price';
import { useCounter } from '@recoil/counter/counter';

type Props = {
  item: Item;
};

export const ProductItem = ({ item }: Props) => {
  useItemPrice(item.id, item.price);
  const { count } = useCounter(item.id);
  const formattedPrice = formatPrice(item.price);

  return (
    <Wrapper isInCart={count > 0}>
      <Thumbnail />
      <Content>
        <ContentHeader>
          <ProductName>{item.name}</ProductName>
          <Chip isEvent={item.event !== 0} />
        </ContentHeader>
        <ContentBody>
          <ItemCounter id={item.id} />
          <Price>{formattedPrice}</Price>
        </ContentBody>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.li<{ isInCart: boolean }>`
  ${flexRow};
  gap: 16px;
  width: 100%;
  height: 80px;
  padding: 8px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: ${({ theme: { radius } }) => radius.medium15};
  background: ${({ theme: { colors }, isInCart }) =>
    isInCart ? colors.orange50 : colors.white};
  font: ${({ theme: { fonts } }) => fonts.displayM};
  color: ${({ theme: { colors } }) => colors.textBlack};
`;

const Thumbnail = styled.div`
  width: 62px;
  height: 62px;
  aspect-ratio: 1/1;
  background: ${({ theme: { colors } }) => colors.gray};
`;

const Content = styled.div`
  width: 100%;
  ${flexColumn};
  justify-content: space-between;
`;

const ContentHeader = styled.div`
  ${flexRow};
  gap: 12px;
`;

const ProductName = styled.p``;

const ContentBody = styled.div`
  ${flexRow};
  justify-content: space-between;
  align-items: center;
`;

const Price = styled.p``;
