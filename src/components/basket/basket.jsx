import { useSelector, useDispatch} from 'react-redux';
import { useState } from 'react';

import { getDiscountGuitar, getCouponStatus, getGuitarIdAndCount, getCouponLoading } from '../../store/basket/selectors';
import { getGuitars, getGuitarsErrorStatus, getLoadingGuitarsBasket } from '../../store/guitar/selectors';
import { setModalType, setGuitarAddModal, setGuitarIdAndCount } from '../../store/action';
import { postCoupons } from '../../store/api-actions';

import Preloader from '../preloader/preloader';
import ServerError from '../serverError/serverError';

import { getTypeNameUpperCase, getTranslationGuitarTypeRus, setGuitarsStorage, getFullPriceSeparator, getPriceSeparator, getAmountDiscount, getFullPrice, getMessageValidityPromo, getGuitarPlus, getGuitarMinus, getGuitarChangeValue } from '../../utils';
import { TypeModal } from '../../const';

function Basket() {
  const dispatch = useDispatch();

  const discountGuitar = useSelector(getDiscountGuitar);
  const couponStatus = useSelector(getCouponStatus);
  const guitarsIdAdd = useSelector(getGuitarIdAndCount);
  const guitarAll = useSelector(getGuitars);
  const isError = useSelector(getGuitarsErrorStatus);
  const couponLoading = useSelector(getCouponLoading);
  const loadingGuitar = useSelector(getLoadingGuitarsBasket);

  const result = () => {
    if (guitarsIdAdd !== undefined) {
      return Object.keys(guitarsIdAdd).map(parseFloat);
    }
  };

  const resultStatus = result();

  const resultArray = guitarAll.filter((item) => resultStatus.some((item2) => item2 === item.id));

  const [coupon, setCoupon] = useState('');
  const [click, setClick] = useState(false);

  const discountPrice = getAmountDiscount(resultArray, discountGuitar, guitarsIdAdd);

  const handleDeleteGuitarClick = (guitar) => {
    dispatch(setModalType(TypeModal.OpenDeleteGuitar));
    dispatch(setGuitarAddModal(guitar));
    document.body.style.position = 'fixed';
  };

  const handlePluseClick = (guitar) => {
    const coutGuitars = getGuitarPlus(guitar, guitarsIdAdd);
    setGuitarsStorage(coutGuitars);
    dispatch(setGuitarIdAndCount(coutGuitars));
  };

  const handleMinusClick = (guitar) => {
    const coutGuitars = getGuitarMinus({...guitar}, guitarsIdAdd);
    if (guitarsIdAdd[guitar.id] <= 1) {
      dispatch(setModalType(TypeModal.OpenDeleteGuitar));
      dispatch(setGuitarAddModal(guitar));
    } else {
      setGuitarsStorage(coutGuitars);
      dispatch(setGuitarIdAndCount(coutGuitars));    }
  };

  const handleGuitarCountChange = (evt, guitar) => {
    const value = evt.currentTarget.value;
    const coutGuitars = getGuitarChangeValue(guitar, +value, guitarsIdAdd);
    setGuitarsStorage(coutGuitars);
    dispatch(setGuitarIdAndCount(coutGuitars));
  };

  const handleCouponChange = (evt) => {
    const value = evt.currentTarget.value;
    const delSapces = value.split(' ').join('');
    setCoupon(delSapces);
    setClick(false);
  };

  const handleCouponBtnClick = (evt) => {
    evt.preventDefault();
    if (coupon) {
      setClick(true);
      dispatch(postCoupons({coupon: coupon}));
    }
  };

  if (isError) {
    return  <ServerError />;
  }

  if (loadingGuitar) {
    return <Preloader />;
  }


  return(

    <div className="wrapper">
      <main className="page-content">
        <div className="container">
          <h1 className="title title--bigger page-content__title">Корзина</h1>
          <ul className="breadcrumbs page-content__breadcrumbs page-content__breadcrumbs--on-cart-page">
            <li className="breadcrumbs__item">
              <a className="link" href="./main.html">Главная</a>
            </li>
            <li className="breadcrumbs__item">
              <a className="link" href="/catalog/page_1">Каталог</a>
            </li>
            <li className="breadcrumbs__item">
              <a className="link" href="!#">Корзина</a>
            </li>
          </ul>
          {resultArray.length !== 0 ?
            <div className="cart" data-testid={'test'}>
              {resultArray.map((guitar) => (
                <div key={guitar.id} className="cart-item" >
                  <button className="cart-item__close-button button-cross" type="button" aria-label="Удалить" onClick={() => handleDeleteGuitarClick(guitar)}>
                    <span className="button-cross__icon"></span>
                    <span className="cart-item__close-button-interactive-area"></span>
                  </button>
                  <div className="cart-item__image">
                    <img src={guitar.previewImg} srcSet={guitar.previewImg} width="55" height="130" alt="ЭлектроГитара Честер bass" />
                  </div>
                  <div className="product-info cart-item__info">
                    <p className="product-info__title">{getTranslationGuitarTypeRus(guitar.type)} {guitar.name}</p>
                    <p className="product-info__info">Артикул: {guitar.vendorCode}</p>
                    <p className="product-info__info">{getTypeNameUpperCase(getTranslationGuitarTypeRus(guitar.type))}, {guitar.stringCount} струнная</p>
                  </div>
                  <div className="cart-item__price">{getPriceSeparator(guitar.price)} ₽</div>
                  <div className="quantity cart-item__quantity">
                    <button className="quantity__button" aria-label="Уменьшить количество" onClick={() => handleMinusClick(guitar)}>
                      <svg width="8" height="8" aria-hidden="true">
                        <use xlinkHref="#icon-minus"></use>
                      </svg>
                    </button>
                    <input className="quantity__input" type="number" placeholder="1" id="2-count" name="2-count" max="99" onChange={(evt) => handleGuitarCountChange(evt, guitar)} value={`${guitarsIdAdd[guitar.id]}`} />
                    <button className="quantity__button" aria-label="Увеличить количество" onClick={() => handlePluseClick(guitar)}>
                      <svg width="8" height="8" aria-hidden="true">
                        <use xlinkHref="#icon-plus"></use>
                      </svg>
                    </button>
                  </div>
                  <div className="cart-item__price-total">{getPriceSeparator(guitarsIdAdd[guitar.id] * guitar.price)} ₽</div>
                </div>
              ))}
              <div className="cart__footer">
                <div className="cart__coupon coupon">
                  <h2 className="title title--little coupon__title">Промокод на скидку</h2>
                  <p className="coupon__info">Введите свой промокод, если он у вас есть.</p>
                  <form className="coupon__form" id="coupon-form" method="post" action="/">
                    <div className="form-input coupon__input">
                      <label className="visually-hidden">Промокод</label>
                      <input type="text" placeholder="Введите промокод" id="coupon" name="coupon" value={coupon} onChange={handleCouponChange} />
                      {click ? getMessageValidityPromo(coupon, couponLoading, discountGuitar, couponStatus): ''}
                    </div>
                    <button className="button button--big coupon__button" onClick={handleCouponBtnClick}>Применить</button>
                  </form>
                </div>
                <div className="cart__total-info">
                  <p className="cart__total-item">
                    <span className="cart__total-value-name">Всего:</span>
                    <span className="cart__total-value">{getFullPriceSeparator(resultArray, guitarsIdAdd)} ₽</span>
                  </p>
                  <p className="cart__total-item">
                    <span className="cart__total-value-name">Скидка:</span>
                    <span className={`cart__total-value ${discountGuitar >0 ? 'cart__total-value--bonus' : ''} `}>{discountGuitar >0 ? '-' : ''} {discountPrice} ₽</span>
                  </p>
                  <p className="cart__total-item"><span className="cart__total-value-name">К оплате:</span>
                    <span className="cart__total-value cart__total-value--payment">{getPriceSeparator(getFullPrice(resultArray, guitarsIdAdd) - discountPrice)} ₽</span>
                  </p>
                  <button className="button button--red button--big cart__order-button" >Оформить заказ</button>
                </div>
              </div>
            </div> :
            <div className="container">
              <b className="cities__status">Вы ещё не добавили товар в корзину!</b>
            </div>}
        </div>
      </main>
    </div>
  );
}

export default Basket;
