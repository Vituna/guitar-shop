import { useSelector, useDispatch } from 'react-redux';
import FocusLock from 'react-focus-lock';

import { getModalType } from '../../store/reviews/selectors';
import { getGuitarAdd } from '../../store/guitar/selectors';
import { getGuitarAddBasket } from '../../store/basket/selectors';
import { setModalType, setGuitarAddBasket } from '../../store/action';

import { TypeModal } from '../../const';
import { getTypeNameUpperCase, getTranslationGuitarTypeRus, setGuitarsStorage, getPriceSeparator } from '../../utils';

function ModalCardAdd() {
  const dispatch = useDispatch();

  const typeModal = useSelector(getModalType);
  const guitar = useSelector(getGuitarAdd);
  const guitarsAdd = useSelector(getGuitarAddBasket);

  const addGuitars = () => {
    let guitars = [...guitarsAdd];
    const index = guitars.findIndex((newGuitar) => newGuitar.guitar.vendorCode === guitar.vendorCode);
    if (index === -1) {
      guitars = [...guitars, { guitar, count: 1} ];
      return guitars;
    }
  };

  const handleAddClick = (evt) => {
    evt.preventDefault();
    setGuitarsStorage(addGuitars(guitar));
    dispatch(setGuitarAddBasket(addGuitars(guitar)));
    dispatch(setModalType(TypeModal.OpenAddGood));
  };

  const handleCloseModalClick = () => {
    dispatch(setModalType(''));
    document.body.style.position = '';
  };

  return (
    typeModal === TypeModal.OpenCartAdd &&
    <div style={{position: 'relative', width: '550px', height: '410px', marginBottom: '50px'}}>
      <div className="modal is-active modal-for-ui-kit" >
        <div className="modal__wrapper">
          <div className="modal__overlay" data-close-modal onClick={handleCloseModalClick}></div>
          <FocusLock>
            <div className="modal__content">
              <h2 className="modal__header title title--medium" >Добавить товар в корзину</h2>
              <div className="modal__info">
                <img className="modal__img" src={`../${guitar.previewImg}`} srcSet={`../${guitar.previewImg}`} width="67" height="137" alt="Честер bass"/>
                <div className="modal__info-wrapper">
                  <h3 className="modal__product-name title title--little title--uppercase">Гитара {guitar.name}</h3>
                  <p className="modal__product-params modal__product-params--margin-11">Артикул: {guitar.vendorCode}</p>
                  <p className="modal__product-params">{getTypeNameUpperCase(getTranslationGuitarTypeRus(guitar.type))}, {guitar.stringCount} струнная</p>
                  <p className="modal__price-wrapper">
                    <span data-testid="count-value" className="modal__price">Цена:</span>
                    <span className="modal__price">{getPriceSeparator(guitar.price)} ₽</span>
                  </p>
                </div>
              </div>
              <div className="modal__button-container">
                <button className="button button--red button--big modal__button modal__button--add" onClick={handleAddClick}>Добавить в корзину</button>
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

export default ModalCardAdd;
