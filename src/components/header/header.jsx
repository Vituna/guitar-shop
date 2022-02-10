import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getGuitarIdAndCount } from '../../store/basket/selectors';

import Search from '../search/search';

import { getSumValues } from '../../utils';

function Header() {

  const guitarsIdAdd = useSelector(getGuitarIdAndCount);

  const guitarCount = () => getSumValues(guitarsIdAdd);

  return (
    <header className="header" id="header">
      <div className="container header__wrapper">
        <Link className="header__logo logo" to='/'>
          <img className="logo__img" width="70" height="70" src="../img/svg/logo.svg" alt="Логотип" />
        </Link>
        <nav className="main-nav">
          <ul className="main-nav__list">
            <li>
              <a className="link main-nav__link" href="/catalog/page_1">Каталог</a>
            </li>
            <li><a className="link main-nav__link" href="!#">Где купить?</a>
            </li>
            <li><a className="link main-nav__link" href="!#">О компании</a>
            </li>
          </ul>
        </nav>

        <Search />

        <a className="header__cart-link" href="/basket" aria-label="Корзина">
          <svg className="header__cart-icon" width="14" height="14" aria-hidden="true">
            <use xlinkHref="#icon-basket"></use>
          </svg>
          <span className="visually-hidden">Перейти в корзину</span>
          {guitarCount() ? <span className="header__cart-count">{guitarCount()}</span> : ''}
        </a>
      </div>
    </header>
  );
}

export default Header;
