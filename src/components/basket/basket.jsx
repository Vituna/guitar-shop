import { useSelector, useDispatch} from 'react-redux';

import { getGuitarAddBasket } from '../../store/guitar/selectors';
import { setModalType, setGuitarAddModal, setGuitarAddBasket } from '../../store/action';

import { getTypeNameUpperCase, getTranslationGuitarTypeRus, setGuitarsStorage, getSimilarIndexGuitar, getFullPriceSeparator, getPriceSeparator } from '../../utils';
import { TypeModal } from '../../const';

function Basket() {
  const dispatch = useDispatch();

  const guitarsAdd = useSelector(getGuitarAddBasket);

  const guitarPlus = (guitar) => {
    const guitars = [...guitarsAdd];
    const index = getSimilarIndexGuitar(guitars, guitar);
    if (index !== -1) {
      if (guitars[index].count === 99) {
        return guitars;
      }
      guitars[index] = {...guitars[index], count: guitars[index].count + 1 };
    }
    return guitars;
  };

  const guitarMinus = (guitar) => {
    const guitars = [...guitarsAdd];
    const index = getSimilarIndexGuitar(guitars, guitar);

    if (index !== -1) {
      guitars[index] = {...guitars[index], count: guitars[index].count - 1 };
    }
    return guitars;
  };

  const guitarChangeValue = (guitar, count) => {
    const index = getSimilarIndexGuitar(guitarsAdd, guitar);

    if (index === -1 || count < 0 || count > 99) {
      return guitarsAdd;
    }
    const guitarIndex = guitarsAdd[index];
    const guitarIndexCount = {...guitarIndex, count};
    return [...guitarsAdd.slice(0, index), guitarIndexCount, ...guitarsAdd.slice(index + 1)];
  };

  const handleDeleteGuitarClick = (guitar) => {
    dispatch(setModalType(TypeModal.OpenDeleteGuitar));
    dispatch(setGuitarAddModal(guitar));
  };

  const handlePluseClick = (guitar) => {
    const coutGuitars = guitarPlus({...guitar});
    setGuitarsStorage(coutGuitars);
    dispatch(setGuitarAddBasket(coutGuitars));
  };

  const handleMinusClick = (guitar) => {
    const coutGuitars = guitarMinus({...guitar});
    if (guitar.count <= 1) {
      dispatch(setModalType(TypeModal.OpenDeleteGuitar));
      dispatch(setGuitarAddModal(guitar));
    } else {
      setGuitarsStorage(coutGuitars);
      dispatch(setGuitarAddBasket(coutGuitars));    }
  };

  const handleGuitarCountChange = (evt, guitar) => {
    const value = evt.currentTarget.value;
    const coutGuitars = guitarChangeValue(guitar, +value);
    setGuitarsStorage(coutGuitars);
    dispatch(setGuitarAddBasket(coutGuitars));
  };

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
          {guitarsAdd.length ?
            <div className="cart">
              {guitarsAdd.map((guitar) => (
                <div key={guitar.guitar.id} className="cart-item">
                  <button className="cart-item__close-button button-cross" type="button" aria-label="Удалить" onClick={() => handleDeleteGuitarClick(guitar)}>
                    <span className="button-cross__icon"></span>
                    <span className="cart-item__close-button-interactive-area"></span>
                  </button>
                  <div className="cart-item__image">
                    <img src={guitar.guitar.previewImg} srcSet={guitar.guitar.previewImg} width="55" height="130" alt="ЭлектроГитара Честер bass" />
                  </div>
                  <div className="product-info cart-item__info">
                    <p className="product-info__title">{getTranslationGuitarTypeRus(guitar.guitar.type)} {guitar.guitar.name}</p>
                    <p className="product-info__info">Артикул: {guitar.guitar.vendorCode}</p>
                    <p className="product-info__info">{getTypeNameUpperCase(getTranslationGuitarTypeRus(guitar.guitar.type))}, 6 струнная</p>
                  </div>
                  <div className="cart-item__price">{getPriceSeparator(guitar.guitar.price)} ₽</div>
                  <div className="quantity cart-item__quantity">
                    <button className="quantity__button" aria-label="Уменьшить количество" onClick={() => handleMinusClick(guitar)}>
                      <svg width="8" height="8" aria-hidden="true">
                        <use xlinkHref="#icon-minus"></use>
                      </svg>
                    </button>
                    <input className="quantity__input" type="number" placeholder="1" id="2-count" name="2-count" max="99" onChange={(evt) => handleGuitarCountChange(evt, guitar)} value={`${guitar.count}`} />
                    <button className="quantity__button" aria-label="Увеличить количество" onClick={() => handlePluseClick(guitar)}>
                      <svg width="8" height="8" aria-hidden="true">
                        <use xlinkHref="#icon-plus"></use>
                      </svg>
                    </button>
                  </div>
                  <div className="cart-item__price-total">{getPriceSeparator(guitar.count * guitar.guitar.price)} ₽</div>
                </div>
              ))}
              <div className="cart__footer">
                <div className="cart__coupon coupon">
                  <h2 className="title title--little coupon__title">Промокод на скидку</h2>
                  <p className="coupon__info">Введите свой промокод, если он у вас есть.</p>
                  <form className="coupon__form" id="coupon-form" method="post" action="/">
                    <div className="form-input coupon__input">
                      <label className="visually-hidden">Промокод</label>
                      <input type="text" placeholder="Введите промокод" id="coupon" name="coupon" />
                      <p className="form-input__message form-input__message--success">Промокод принят</p>
                    </div>
                    <button className="button button--big coupon__button">Применить</button>
                  </form>
                </div>
                <div className="cart__total-info">
                  <p className="cart__total-item">
                    <span className="cart__total-value-name">Всего:</span>
                    <span className="cart__total-value">{getFullPriceSeparator(guitarsAdd)} ₽</span>
                  </p>
                  <p className="cart__total-item"><span className="cart__total-value-name">Скидка:</span><span className="cart__total-value cart__total-value--bonus">- 3000 ₽</span></p>
                  <p className="cart__total-item"><span className="cart__total-value-name">К оплате:</span><span className="cart__total-value cart__total-value--payment">49 000 ₽</span></p>
                  <button className="button button--red button--big cart__order-button">Оформить заказ</button>
                </div>
              </div>
            </div> :
            <div className="container">
              <b className="cities__status">Вы ещё не добавили товар в корзину!</b>
            </div>}
        </div>
      </main>
      <footer className="footer">
        <div className="footer__container container">
          <a className="footer__logo logo" href="main.html">
            <img className="logo__img" width="70" height="70" src="/./img/svg/logo.svg" alt="Логотип" />
          </a>
          <div className="socials footer__socials">
            <ul className="socials__list">
              <li className="socials-item">
                <a className="socials__link" href="https://www.facebook.com/" aria-label="facebook">
                  <svg className="socials__icon" width="24" height="24" aria-hidden="true">
                    <use xlinkHref="#icon-facebook"></use>
                  </svg>
                </a>
              </li>
              <li className="socials-item">
                <a className="socials__link" href="https://www.instagram.com/" aria-label="instagram">
                  <svg className="socials__icon" width="24" height="24" aria-hidden="true">
                    <use xlinkHref="#icon-instagram"></use>
                  </svg>
                </a>
              </li>
              <li className="socials-item">
                <a className="socials__link" href="https://www.twitter.com/" aria-label="twitter">
                  <svg className="socials__icon" width="24" height="24" aria-hidden="true">
                    <use xlinkHref="#icon-twitter"></use>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <section className="footer__nav-section footer__nav-section--info">
            <h2 className="footer__nav-title">О нас</h2>
            <p className="footer__nav-content footer__nav-content--font-secondary">Магазин гитар, музыкальных инструментов и гитарная мастерская <br/> в Санкт-Петербурге.<br/><br/>Все инструменты проверены, отстроены <br/> и доведены до идеала!</p>
          </section>
          <section className="footer__nav-section footer__nav-section--links">
            <h2 className="footer__nav-title">Информация</h2>
            <ul className="footer__nav-list">
              <li className="footer__nav-list-item"><a className="link" href="#top">Где купить?</a>
              </li>
              <li className="footer__nav-list-item"><a className="link" href="#top">Блог</a>
              </li>
              <li className="footer__nav-list-item"><a className="link" href="#top">Вопрос - ответ</a>
              </li>
              <li className="footer__nav-list-item"><a className="link" href="#top">Возврат</a>
              </li>
              <li className="footer__nav-list-item"><a className="link" href="#top">Сервис-центры</a>
              </li>
            </ul>
          </section>
          <section className="footer__nav-section footer__nav-section--contacts">
            <h2 className="footer__nav-title">Контакты</h2>
            <p className="footer__nav-content">г. Санкт-Петербург,<br/> м. Невский проспект, <br/>ул. Казанская 6.</p>
            <div className="footer__nav-content">
              <svg className="footer__icon" width="8" height="8" aria-hidden="true">
                <use xlinkHref="#icon-phone"></use>
              </svg><a className="link" href="tel:88125005050"> 8-812-500-50-50</a>
            </div>
            <p className="footer__nav-content">Режим работы:<br/>
              <span className="footer__span">
                <svg className="footer__icon" width="13" height="13" aria-hidden="true">
                  <use xlinkHref="#icon-clock"></use>
                </svg>
                <span> с 11:00 до 20:00</span>
                <span>без выходных</span>
              </span>
            </p>
          </section>
        </div>
      </footer>
    </div>

  );
}

export default Basket;
