import { useSelector, useDispatch } from 'react-redux';
import FocusLock from 'react-focus-lock';

import { getModalType } from '../../store/reviews/selectors';
import { getGuitar } from '../../store/guitar/selectors';
import { setModalType } from '../../store/action';

import { TypeModal } from '../../const';
import { getTypeNameUpperCase, getTranslationGuitarTypeRus } from '../../utils';

function ModalCardAdd() {
  const dispatch = useDispatch();

  const typeModal = useSelector(getModalType);
  const guitar = useSelector(getGuitar);

  const handleDivClick = () => {
    dispatch(setModalType(''));
  };

  return (
    typeModal.modalType === TypeModal.OpenCartAdd &&
    <div style={{position: 'relative', width: '550px', height: '410px', marginBottom: '50px'}}>
      <div className="modal is-active modal-for-ui-kit" >
        <div className="modal__wrapper">
          <div className="modal__overlay" data-close-modal onClick={handleDivClick}></div>
          <FocusLock>
            <div className="modal__content">
              <h2 className="modal__header title title--medium" >Добавить товар в корзину</h2>
              <div className="modal__info">
                <img className="modal__img" src={`../${guitar.previewImg}`} srcSet={`../${guitar.previewImg}`} width="67" height="137" alt="Честер bass"/>
                <div className="modal__info-wrapper">
                  <h3 className="modal__product-name title title--little title--uppercase">{guitar.name}</h3>
                  <p className="modal__product-params modal__product-params--margin-11">Артикул: {guitar.vendorCode}</p>
                  <p className="modal__product-params">{getTypeNameUpperCase(getTranslationGuitarTypeRus(guitar.type))}, {guitar.stringCount} струнная</p>
                  <p className="modal__price-wrapper">
                    <span data-testid="count-value" className="modal__price">Цена:</span>
                    <span className="modal__price">{guitar.price} ₽</span>
                  </p>
                </div>
              </div>
              <div className="modal__button-container">
                <button className="button button--red button--big modal__button modal__button--add">Добавить в корзину</button>
              </div>
              <button className="modal__close-btn button-cross" type="button" aria-label="Закрыть"><span className="button-cross__icon"></span><span className="modal__close-btn-interactive-area"></span>
              </button>
            </div>
          </FocusLock>
        </div>
      </div>
    </div>
  );
}

export default ModalCardAdd;
