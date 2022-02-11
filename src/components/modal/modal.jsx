/* eslint-disable react/prop-types */
import { useSelector, useDispatch } from 'react-redux';
import FocusLock from 'react-focus-lock';
import { Link } from 'react-router-dom';

import { getGuitarAdd } from '../../store/guitar/selectors';

import { AppRoute } from '../../const';
import { getTypeNameUpperCase, getTranslationGuitarTypeRus, getPriceSeparator, closeModal } from '../../utils';

function Modal(props) {
  const dispatch = useDispatch();

  const guitar = useSelector(getGuitarAdd);

  const handleCloseModalClick = () => {
    closeModal(dispatch);
  };

  return (
    <div style={{position: 'relative', width: '550px', height: '410px', marginBottom: '50px'}}>
      <div className="modal is-active modal--success modal-for-ui-kit" data-testid="count-value">
        <div className="modal__wrapper">
          <div className="modal__overlay" data-close-modal onClick={handleCloseModalClick}></div>
          <FocusLock>
            <div className="modal__content">
              {props.titleAdd || props.titleDel ?
                <>
                  <h2 className={`modal__header title title--medium ${props.titleDel ? 'title--red' : ''}`}>{props.titleAdd ? props.titleAdd : props.titleDel}</h2>
                  <div className="modal__info">
                    <img className="modal__img" src={`../${guitar.previewImg}`} srcSet={`../${guitar.previewImg}`}width="67" height="137" alt="Честер bass" />
                    <div className="modal__info-wrapper">
                      <h3 className="modal__product-name title title--little title--uppercase">Гитара {guitar.name}</h3>
                      <p className="modal__product-params modal__product-params--margin-11">Артикул: {guitar.vendorCode}</p>
                      <p className="modal__product-params">{getTypeNameUpperCase(getTranslationGuitarTypeRus(guitar.type))}, {guitar.stringCount} струнная</p>
                      <p className="modal__price-wrapper">
                        <span className="modal__price">Цена:</span>
                        <span className="modal__price">{getPriceSeparator(guitar.price)} ₽</span>
                      </p>
                    </div>
                  </div>
                </> : ''}
              {props.godMarketMessage || props.godReviewMessage ?
                <>
                  <svg className="modal__icon" width="26" height="20" aria-hidden="true">
                    <use xlinkHref="#icon-success"></use>
                  </svg>
                  <p className="modal__message">{props.godMarketMessage ? props.godMarketMessage : props.godReviewMessage}</p>
                </> : ''}
              <div className="modal__button-container">
                {props.addButtonMessage && <button className="button button--red button--big modal__button modal__button--add" onClick={props.handleAddClick}>Добавить в корзину</button>}
                {props.delBtnCardMessage && <button className="button button--small modal__button" onClick={props.handleDeleteCardClick}>Удалить товар</button>}
                {props.continueShoppingBtnMessage && <button className="button button--black-border button--small modal__button modal__button--right" onClick={handleCloseModalClick}>Продолжить покупки</button>}
                {props.goBasketMessage && <Link to={AppRoute.Basket} className="button button--small modal__button" onClick={handleCloseModalClick}>Перейти в корзину</Link>}
                {props.continueShoppBtnMessage && <Link to={AppRoute.CatalogPagaOne} className="button button--black-border button--small modal__button modal__button--right" onClick={handleCloseModalClick}>Продолжить покупки</Link>}
                {props.continueBtnMessage && <button className="button button--small modal__button modal__button--review" tabIndex={1} onClick={handleCloseModalClick}>К покупкам!</button>}
              </div>
              <button className="modal__close-btn button-cross" type="button" aria-label="Закрыть" onClick={handleCloseModalClick}>
                <span className="button-cross__icon"></span>
                <span className="modal__close-btn-interactive-area"></span>
              </button>
            </div>
          </FocusLock>
        </div>
      </div>
    </div>
  );
}

export default Modal;
