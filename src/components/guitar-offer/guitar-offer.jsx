/* eslint-disable no-console */
import { Link } from 'react-router-dom';

import Rating from '../rating/rating';

function GuitarOffer(guitar) {
  const nameTypeGuitar = guitar.guitar.type;
  const TypeNameUpperCase = nameTypeGuitar.charAt(0).toUpperCase() + nameTypeGuitar.slice(1);

  const comments = guitar.guitar.comments;

  return (
    <div className="product-card">
      <img src={`/${guitar.guitar.previewImg}`} width="75" height="190" alt={guitar.guitar.name} />
      <div className="product-card__info">
        <div className="rate product-card__rate" aria-hidden="true">
          <span className="visually-hidden">Рейтинг:</span>

          <Rating rating={guitar.guitar.rating}/>

          <span className="rate__count">{comments.length}</span><span className="rate__message"></span>
        </div>
        <p className="product-card__title">{guitar.guitar.name} {TypeNameUpperCase}</p>
        <p className="product-card__price">
          <span className="visually-hidden">
            Цена:
          </span>
          {guitar.guitar.price} ₽
        </p>
      </div>
      <div className="product-card__buttons">
        <Link to={`/guitars/${guitar.guitar.id}`} className="button button--mini" href="!#">
          Подробнее
        </Link>
        <a className="button button--red button--mini button--add-to-cart" href="!#">Купить</a>
      </div>
    </div>
  );
}

export default GuitarOffer;
