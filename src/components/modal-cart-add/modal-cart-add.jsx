import { useSelector, useDispatch } from 'react-redux';
import FocusLock from 'react-focus-lock';

import { getModalType } from '../../store/reviews/selectors';
import { getGuitarAdd } from '../../store/guitar/selectors';
import { getGuitarIdAndCount } from '../../store/basket/selectors';
import { setModalType, setGuitarIdAndCount } from '../../store/action';

import { TypeModal } from '../../const';
import { getTypeNameUpperCase, getTranslationGuitarTypeRus, setGuitarsStorage, getPriceSeparator, closeModal } from '../../utils';

function ModalCardAdd() {
  const dispatch = useDispatch();

  const typeModal = useSelector(getModalType);
  const guitar = useSelector(getGuitarAdd);
  const guitarsIdAdd = useSelector(getGuitarIdAndCount);

  const guitarId = guitar.id;

  const addIdAndCount = () => {
    const myObj = Object();
    if (guitarsIdAdd !== undefined) {
      if (Object.keys(guitarsIdAdd).map(parseFloat).every((elem) => elem !== guitarId)) {
        myObj[guitarId] = 1;
        const returnedTarget = {...myObj, ...guitarsIdAdd};
        return returnedTarget;
      } else {
        const keyt = Object.keys(guitarsIdAdd).find((keyg) => guitarsIdAdd[keyg] === guitarsIdAdd[guitar.id]);
        myObj[keyt] = guitarsIdAdd[guitar.id] + 1;
        const returnedTarget = {...guitarsIdAdd, ...myObj};
        return returnedTarget;
      }
    }
  };

  const handleAddClick = (evt) => {
    evt.preventDefault();
    dispatch(setGuitarIdAndCount(addIdAndCount()));
    setGuitarsStorage(addIdAndCount());
    dispatch(setModalType(TypeModal.OpenAddGood));
  };

  const handleCloseModalClick = () => {
    closeModal(dispatch);
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
