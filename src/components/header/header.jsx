import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getGuitarIdAndCount } from '../../store/basket/selectors';

import Search from '../search/search';

import { getSumValues } from '../../utils';
import { AppRoute } from '../../const';

function Header() {

  const guitarsIdAdd = useSelector(getGuitarIdAndCount);

  const guitarCount = () => getSumValues(guitarsIdAdd);

  return (
    <header className="header" id="header">
      <div className="container header__wrapper">
        <Link className="header__logo logo" to={AppRoute.Main}>
          <img className="logo__img" width="70" height="70" src="../img/svg/logo.svg" alt="Логотип" />
        </Link>
        <nav className="main-nav">
          <ul className="main-nav__list">
            <li>
              <Link className="link main-nav__link" to={AppRoute.CatalogPagaOne}>Каталог</Link>
            </li>
            <li><a className="link main-nav__link" href="!#">Где купить?</a>
            </li>
            <li><a className="link main-nav__link" href="!#">О компании</a>
            </li>
          </ul>
        </nav>

        <Search />

        <Link className="header__cart-link" to={AppRoute.Basket} aria-label="Корзина">
          <svg className="header__cart-icon" width="14" height="14" aria-hidden="true">
            <use xlinkHref="#icon-basket"></use>
          </svg>
          <span className="visually-hidden">Перейти в корзину</span>
          {guitarCount() ? <span className="header__cart-count">{guitarCount()}</span> : ''}
        </Link>
      </div>
    </header>
  );
}

export default Header;
