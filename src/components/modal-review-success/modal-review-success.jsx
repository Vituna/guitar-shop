import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { getModalType } from '../../store/reviews/selectors';

import Modal from '../modal/modal';


import { TypeModal } from '../../const';
import { closeModal } from '../../utils';

function ModalReviewSuccess() {
  const dispatch = useDispatch();

  const typeModal = useSelector(getModalType);

  const handleEscapeKeyDown = (evt) => {
    if (evt.code === 'Escape') {
      closeModal(dispatch);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleEscapeKeyDown);

    return () => {
      document.removeEventListener('keydown', handleEscapeKeyDown);
    };

  });

  return (
    typeModal === TypeModal.OpenSuccessReviews &&
    <Modal
      godReviewMessage={'Спасибо за ваш отзыв!'}
      continueBtnMessage={'К покупкам'}
    />

  );
}

export default ModalReviewSuccess;
