import { styled } from 'styled-components';
import { ProductItem } from './ProductItem';
import { flexColumn } from '@styles/customStyles';

import { useGetItems } from '@recoil/item/useGetItems';

export const ProductList = () => {
  const { items } = useGetItems();

  return (
    <Wrapper>
      {items?.map((item: Item) => {
        return <ProductItem key={item.id} item={item} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  width: 100%;
  height: fit-content;
  flex: 1;
  ${flexColumn};
  gap: 18px;
  padding-top: 16px;
  padding-bottom: 36px;
`;
