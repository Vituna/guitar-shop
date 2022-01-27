import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import FocusLock from 'react-focus-lock';

import { getModalType } from '../../store/reviews/selectors';
import { setModalType } from '../../store/action';


import { TypeModal } from '../../const';

function ModalReviewSuccess() {
  const dispatch = useDispatch();

  const typeModal = useSelector(getModalType);

  const handleCloseModalClick = () => {
    dispatch(setModalType(''));
    document.body.style.position = '';
  };

  const handleEscapeKeyDown = (evt) => {
    if (evt.code === 'Escape') {
      dispatch(setModalType(''));
      document.body.style.position = '';
    }
  };

  const handleDivClick = () => {
    dispatch(setModalType(''));
    document.body.style.position = '';
  };

  useEffect(() => {
    document.addEventListener('keydown', handleEscapeKeyDown);

    return () => {
      document.removeEventListener('keydown', handleEscapeKeyDown);
    };

  });

  return (
    typeModal === TypeModal.OpenSuccessReviews &&
    <div style={{position: 'relative', width: '550px', height: '410px', marginBottom: '50px'}}>
      <div className="modal is-active modal--success modal-for-ui-kit">
        <div className="modal__wrapper">
          <div className="modal__overlay" data-close-modal onClick={handleDivClick}></div>
          <FocusLock>
            <div className="modal__content">
              <svg className="modal__icon" width="26" height="20" aria-hidden="true">
                <use xlinkHref="#icon-success"></use>
              </svg>
              <p className="modal__message">Спасибо за ваш отзыв!</p>
              <div className="modal__button-container modal__button-container--review">
                <button className="button button--small modal__button modal__button--review" tabIndex={1} onClick={handleCloseModalClick}>К покупкам!</button>
              </div>
              <button className="modal__close-btn button-cross" type="button" aria-label="Закрыть" tabIndex={2} onClick={handleCloseModalClick}>
                <span className="button-cross__icon"></span><span className="modal__close-btn-interactive-area"></span>
              </button>
            </div>
          </FocusLock>
        </div>
      </div>
    </div>
  );
}

export default ModalReviewSuccess;
