/* eslint-disable no-console */
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import { fetchCurrentGuitarAction, fetchComments } from '../../store/api-actions';
import { getGuitar, getGuitarLoading } from '../../store/guitar/selectors';

import Header from '../header/header';
import Rating from '../rating/rating';
import Reviews from '../reviews/reviews';
import Preloader from '../preloader/preloader';

import { getTypeNameUpperCase } from '../../utils';

const Tabs = {
  Characteristic: 'Characteristic',
  Description: 'Description',
};

function GuitarCard() {
  const dispatch = useDispatch();

  const { id } = useParams();

  const guitar = useSelector(getGuitar);
  const guitarLoading = useSelector(getGuitarLoading);

  const [tabs, setTabs] = useState(Tabs.Characteristic);

  useEffect(() => {
    dispatch(fetchCurrentGuitarAction(id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(fetchComments(id));
  }, [id, dispatch]);

  if (guitar === null || guitarLoading) {
    return <Preloader />;
  }

  const handleCharacteristicClick = (evt) => {
    evt.preventDefault();
    setTabs(Tabs.Characteristic);
  };

  const handleDescriptionClick = (evt) => {
    evt.preventDefault();
    setTabs(Tabs.Description);
  };

  return (
    <div className="wrapper">

      <Header />

      <main className="page-content">
        <div className="container">
          <h1 className="page-content__title title title--bigger">Товар</h1>
          <ul className="breadcrumbs page-content__breadcrumbs">
            <li className="breadcrumbs__item"><a className="link" href="./main.html">Главная</a>
            </li>
            <li className="breadcrumbs__item"><a className="link" href="/catalog/page_1">Каталог</a>
            </li>
            <li className="breadcrumbs__item"><a className="link" href="!#">{guitar.name}</a>
            </li>
          </ul>
          <div className="product-container">
            <img className="product-container__img" src={`../${guitar.previewImg}`} srcSet="img/content/catalog-product-2@2x.jpg 2x" width="90" height="235" alt="" />
            <div className="product-container__info-wrapper">
              <h2 className="product-container__title title title--big title--uppercase">{guitar.name}</h2>
              <div className="rate product-container__rating" aria-hidden="true"><span className="visually-hidden">Рейтинг:</span>

                <Rating rating={guitar.rating}/>

                <span className="rate__count"></span><span className="rate__message"></span>
              </div>
              <div className="tabs">
                <a className={`button button--medium tabs__button ${tabs === Tabs.Description ? 'button--black-border' : ''}`} href="#characteristics" onClick={handleCharacteristicClick}>Характеристики</a>
                <a className={`button ${tabs === Tabs.Characteristic ? 'button--black-border' : ''} button--medium tabs__button`} href="#description" onClick={handleDescriptionClick}>Описание</a>
                <div className="tabs__content" id="characteristics">
                  <table className={`tabs__table ${tabs === Tabs.Characteristic ? '' : 'hidden'}`}>
                    <tbody>
                      <tr className="tabs__table-row">
                        <td className="tabs__title">Артикул:</td>
                        <td className="tabs__value">{guitar.vendorCode}</td>
                      </tr>
                      <tr className="tabs__table-row">
                        <td className="tabs__title">Тип:</td>
                        <td className="tabs__value">{getTypeNameUpperCase(guitar.type)}</td>
                      </tr>
                      <tr className="tabs__table-row">
                        <td className="tabs__title">Количество струн:</td>
                        <td className="tabs__value">{guitar.stringCount} струнная</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className={`tabs__product-description ${tabs === Tabs.Description ? '' : 'hidden'}`}>{guitar.description}</p>
                </div>
              </div>
            </div>
            <div className="product-container__price-wrapper">
              <p className="product-container__price-info product-container__price-info--title">Цена:</p>
              <p className="product-container__price-info product-container__price-info--value">{guitar.price} ₽</p><a className="button button--red button--big product-container__button" href="!#">Добавить в корзину</a>
            </div>
          </div>

          <Reviews />

        </div>
      </main>
      <footer className="footer">
        <div className="footer__container container">
          <a className="footer__logo logo" href="main.html">
            <img className="logo__img" width="70" height="70" src="./img/svg/logo.svg" alt="Логотип" />
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

export default GuitarCard;
