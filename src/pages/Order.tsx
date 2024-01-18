import { Button } from '@components/common/Button';
import { TopHeader } from '@components/pages/order/Header';
import { OrderLayout } from '@components/pages/order/OrderLayout';
import { Panel } from '@components/pages/order/Panel';
import { ProductList } from '@components/pages/order/product/ProductList';

import { styled } from 'styled-components';
import { Loading } from './Loading';
import { useGetItems } from '@recoil/item/useGetItems';

export const Order = () => {
  const { isLoading } = useGetItems();

  return (
    <Wrapper>
      <OrderLayout>{isLoading ? <Loading /> : <ProductList />}</OrderLayout>

      {/* <Button
        variant="default"
        onClick={() => {
          console.log('default');
        }}
      >
        주문하러 가기
      </Button>
      <Button
        variant="withState"
        state={true}
        onClick={() => {
          console.log('withState');
        }}
      >
        로딩중
      </Button>
      <Button
        variant="withState"
        state={false}
        onClick={() => {
          console.log('withState');
        }}
      >
        안로딩중
      </Button>
      <Button
        variant="text"
        onClick={() => {
          console.log('text');
        }}
      >
        주문하러 가기
      </Button> */}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 57px;
  padding-bottom: 150px;
`;
