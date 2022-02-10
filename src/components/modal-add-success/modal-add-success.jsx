import { useSelector, useDispatch } from 'react-redux';
import FocusLock from 'react-focus-lock';
import { Link } from 'react-router-dom';

import { getModalType } from '../../store/reviews/selectors';

import { TypeModal, AppRoute } from '../../const';
import { closeModal } from '../../utils';

function ModalAddSuccess() {
  const dispatch = useDispatch();

  const typeModal = useSelector(getModalType);

  const handleCloseModalClick = () => {
    closeModal(dispatch);
  };

  return (
    typeModal === TypeModal.OpenAddGood &&
    <div style={{position: 'relative', width: '550px', height: '410px', marginBottom: '50px'}}>
      <div className="modal is-active modal--success modal-for-ui-kit">
        <div className="modal__wrapper">
          <div className="modal__overlay" data-close-modal onClick={handleCloseModalClick}></div>
          <FocusLock>
            <div className="modal__content">
              <svg className="modal__icon" width="26" height="20" aria-hidden="true">
                <use xlinkHref="#icon-success"></use>
              </svg>
              <p className="modal__message">Товар успешно добавлен в корзину</p>
              <div className="modal__button-container modal__button-container--add">
                <Link to={AppRoute.Basket} className="button button--small modal__button" onClick={handleCloseModalClick}>Перейти в корзину</Link>
                <Link to={AppRoute.CatalogPagaOne} className="button button--black-border button--small modal__button modal__button--right" onClick={handleCloseModalClick}>Продолжить покупки</Link>
              </div>
              <button className="modal__close-btn button-cross" type="button" aria-label="Закрыть" onClick={handleCloseModalClick}><span className="button-cross__icon"></span><span className="modal__close-btn-interactive-area"></span>
              </button>
            </div>
          </FocusLock>
        </div>
      </div>
    </div>
  );
}

export default ModalAddSuccess;
