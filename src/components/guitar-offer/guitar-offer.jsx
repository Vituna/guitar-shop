import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { setModalType, setGuitarAddModal } from '../../store/action';
import { getGuitarAddBasket } from '../../store/basket/selectors';

import Rating from '../rating/rating';

import { getTypeNameUpperCase, getPriceSeparator } from '../../utils';
import { TypeModal, AppRoute } from '../../const';

function GuitarOffer(guitar) {
  const dispatch = useDispatch();

  const guitarsAdd = useSelector(getGuitarAddBasket);

  const comments = guitar.guitar.comments;
  const guitarAdd = guitar.guitar;

  const productCart = () => {
    if (guitarsAdd !== undefined) {
      return guitarsAdd.find((searchGuitar) => searchGuitar.guitar.vendorCode === guitarAdd.vendorCode);
    }
  };

  const notUndefined = () => {
    if (productCart() !== undefined) {
      return true;
    } else {return false;}
  };

  const handleCardAddClick = (evt) => {
    evt.preventDefault();
    dispatch(setModalType(TypeModal.OpenCartAdd));
    dispatch(setGuitarAddModal(guitarAdd));
    document.body.style.position = 'fixed';
  };

  return (
    <div className="product-card">
      <img src={`/${guitar.guitar.previewImg}`} width="75" height="190" alt={guitar.guitar.name} />
      <div className="product-card__info">
        <div className="rate product-card__rate" aria-hidden="true">
          <span className="visually-hidden">Рейтинг:</span>

          <Rating rating={guitar.guitar.rating}/>

          <span className="rate__count">{comments.length}</span><span className="rate__message"></span>
        </div>
        <p className="product-card__title">{guitar.guitar.name} {getTypeNameUpperCase(guitar.guitar.type)}</p>
        <p className="product-card__price">
          <span className="visually-hidden">
            Цена:
          </span>
          {getPriceSeparator(guitar.guitar.price)} ₽
        </p>
      </div>
      <div className="product-card__buttons">
        <Link to={`/guitars/${guitar.guitar.id}`} className="button button--mini" href="!#">
          Подробнее
        </Link>
        {notUndefined() ?
          <Link to={AppRoute.Basket} className="button button--red-border button--mini button--in-cart" >В Корзине</Link> :
          <a className="button button--red button--mini button--add-to-cart" href="!#" onClick={handleCardAddClick}>Купить</a>}
      </div>
    </div>
  );
}

export default GuitarOffer;
