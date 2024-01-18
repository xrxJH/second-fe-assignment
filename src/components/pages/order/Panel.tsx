import { Button } from '@components/common/Button';
import { Modal } from '@components/common/Modal';
import { PATH } from '@constants/path';
import { useResetRecoilContext } from '@context/resetRecoilContext';
import { useModal } from '@hooks/useModal';
import { useTriggerOrder } from '@hooks/useTriggerOrder';
import { totalCounterValue } from '@recoil/counter/counter';
import { useGetItems } from '@recoil/item/useGetItems';
import { totalPriceSelector } from '@recoil/price/price';
import { flexColumn, flexRow } from '@styles/customStyles';
import { formatPrice } from '@utils/formatPrice';
import { useBlocker } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { styled } from 'styled-components';

export const Panel = () => {
  const updateKey = useResetRecoilContext();
  const { isLoading } = useGetItems();
  const { isOrderLoading, triggerOrder, clearTimer } = useTriggerOrder();
  const totalCount = useRecoilValue(totalCounterValue);
  const totalPrice = useRecoilValue(totalPriceSelector);
  const formattedPrice = formatPrice(totalPrice);
  const { modalRef, openModal, closeModal } = useModal();

  const blocker = useBlocker(
    ({ currentLocation, nextLocation }) =>
      isOrderLoading &&
      currentLocation.pathname !== nextLocation.pathname &&
      nextLocation.pathname !== PATH.COMPLETE &&
      nextLocation.pathname !== PATH.ERROR
  );

  if (blocker.state === 'blocked') {
    openModal();
    clearTimer();
  }

  const handleOrder = () => {
    if (totalCount === 0) return;
    triggerOrder();
  };

  const handleConfirm = () => {
    closeModal();
    updateKey();
    clearTimer();
  };

  const handleCancel = () => {
    triggerOrder();
    closeModal();
  };

  return (
    <>
      <Wrapper>
        <ColumnBox>
          <TextBox onClick={openModal}>
            <Text>총 수량: {totalCount}개</Text>
            <Text>총 가격: {formattedPrice}</Text>
          </TextBox>

          <Button
            variant="withState"
            isDisabled={isLoading || isOrderLoading}
            onClick={handleOrder}
          >
            {isOrderLoading ? '로딩중...' : '주문하기'}
          </Button>
        </ColumnBox>
      </Wrapper>
      <Modal ref={modalRef}>
        <ContentBox>
          <HelpText>주문을 취소하시겠습니까?</HelpText>
          <ButtonBox>
            <Button variant="text" onClick={handleConfirm}>
              <ButtonText>확인</ButtonText>
            </Button>
            <Button variant="text" onClick={handleCancel}>
              <ButtonText>취소</ButtonText>
            </Button>
          </ButtonBox>
        </ContentBox>
      </Modal>
    </>
  );
};

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  padding: 25px;
  background: ${({ theme: { colors } }) => colors.white};
  border-radius: 20px 20px 0px 0px;
  box-shadow: 0px -10px 7px -7px rgba(0, 0, 0, 0.25);
`;

const ColumnBox = styled.div`
  ${flexColumn};
  gap: 18px;
  justify-content: space-between;
  align-items: flex-end;
`;

const TextBox = styled.div`
  ${flexColumn};
`;

const Text = styled.p`
  cursor: default;
  font: ${({ theme: { fonts } }) => fonts.displayM};
  color: ${({ theme: { colors } }) => colors.textBlack};
`;

const ContentBox = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  ${flexColumn};
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const HelpText = styled.p`
  font: ${({ theme: { fonts } }) => fonts.displayM};
  color: ${({ theme: { colors } }) => colors.textBlack};
`;

const ButtonBox = styled.div`
  width: fit-content;

  ${flexRow};
  justify-content: flex-end;
  align-items: center;
  align-self: flex-end;
  gap: 8px;
`;

const ButtonText = styled.p`
  font: ${({ theme: { fonts } }) => fonts.displayM};
  color: ${({ theme: { colors } }) => colors.textBlack};
  padding: 4px 8px;
`;
