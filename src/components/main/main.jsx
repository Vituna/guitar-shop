import { useSelector, useDispatch} from 'react-redux';
import { useEffect } from 'react';

import { setErrorNoFound } from '../../store/action';
import { getGuitarsErrorStatus, getErrorNoFound } from '../../store/guitar/selectors';

import FilterPrice from '../filter-price/filter-price';
import FilterType from '../filter-type/filter-type';
import FilterString from '../filter-string/filter-string';
import GuitarsList from '../guitars-list/guitars-list';
import Pagination from '../pagination/pagination';
import ServerError from '../serverError/serverError';

function Main() {
  const dispatch = useDispatch();

  const isError = useSelector(getGuitarsErrorStatus);
  const errorNoFound = useSelector(getErrorNoFound);

  useEffect(() => {
    if (errorNoFound) {
      dispatch(setErrorNoFound(false));
    }
  }, [dispatch, errorNoFound]);

  if (isError) {
    return  <ServerError />;
  }

  return(
    <div className="wrapper">
      <main className="page-content">
        <div className="container">
          <h1 className="page-content__title title title--bigger">Каталог гитар</h1>
          <ul className="breadcrumbs page-content__breadcrumbs">
            <li className="breadcrumbs__item"><a className="link" href="./main.html">Главная</a>
            </li>
            <li className="breadcrumbs__item"><a className="link" href="!#">Каталог</a>
            </li>
          </ul>
          <div className="catalog">
            <form className="catalog-filter">
              <h2 className="title title--bigger catalog-filter__title">Фильтр</h2>
              <FilterPrice />
              <FilterType />
              <FilterString />
            </form>

            <GuitarsList />
            <Pagination />

          </div>
        </div>
      </main>
      <footer className="footer">
        <div className="footer__container container">
          <a className="footer__logo logo" href="!#">
            <img className="logo__img" width="70" height="70" src="/./img/svg/logo.svg" alt="Логотип" />
          </a>
          <div className="socials footer__socials">
            <ul className="socials__list">
              <li className="socials-item">
                <a className="socials__link" href="https://www.facebook.com/" aria-label="facebook">
                  <svg className="socials__icon" width="24" height="24" aria-hidden="true">
                    <use href="#icon-facebook"></use>
                  </svg>
                </a>
              </li>
              <li className="socials-item">
                <a className="socials__link" href="https://www.instagram.com/" aria-label="instagram">
                  <svg className="socials__icon" width="24" height="24" aria-hidden="true">
                    <use href="#icon-instagram"></use>
                  </svg>
                </a>
              </li>=
              <li className="socials-item">
                <a className="socials__link" href="https://www.twitter.com/" aria-label="twitter">
                  <svg className="socials__icon" width="24" height="24" aria-hidden="true">
                    <use href="#icon-twitter"></use>
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
                <use href="#icon-phone"></use>
              </svg><a className="link" href="tel:88125005050"> 8-812-500-50-50</a>
            </div>
            <p className="footer__nav-content">Режим работы:<br/>
              <span className="footer__span">
                <svg className="footer__icon" width="13" height="13" aria-hidden="true">
                  <use href="#icon-clock"></use>
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

export default Main;
