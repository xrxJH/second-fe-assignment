import { useCallback, useRef } from 'react';

export const useModal = () => {
  const modalRef = useRef<HTMLDialogElement>(null);
  console.log(modalRef);
  const openModal = useCallback(() => {
    if (modalRef.current) {
      console.log('modalRef.current!!!!!!!!!!!!!!!!!!!!');
      modalRef.current.showModal();
    }
  }, []);

  const closeModal = useCallback(() => {
    if (modalRef.current) {
      modalRef.current.close();
    }
  }, []);

  return { modalRef, openModal, closeModal };
};
