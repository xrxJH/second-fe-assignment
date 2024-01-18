import { OrderLayout } from '@components/pages/order/OrderLayout';
import { ProductList } from '@components/pages/order/product/ProductList';

import { styled } from 'styled-components';
import { Loading } from './Loading';
import { useGetItems } from '@recoil/item/useGetItems';

export const Order = () => {
  const { isLoading } = useGetItems();

  return (
    <Wrapper>
      <OrderLayout>{isLoading ? <Loading /> : <ProductList />}</OrderLayout>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 57px;
  padding-bottom: 150px;
`;
