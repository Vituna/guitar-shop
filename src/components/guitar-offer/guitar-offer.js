function GuitarOffer(guitar) {

  return (
    <div className="product-card">
      <img src={guitar.guitar.previewImg} width="75" height="190" alt={guitar.guitar.name} />
      <div className="product-card__info">
        <div className="rate product-card__rate" aria-hidden="true">
          <span className="visually-hidden">Рейтинг:</span>
          <svg width="12" height="11" aria-hidden="true">
            <use href="#icon-full-star"></use>
          </svg>
          <svg width="12" height="11" aria-hidden="true">
            <use href="#icon-full-star"></use>
          </svg>
          <svg width="12" height="11" aria-hidden="true">
            <use href="#icon-full-star"></use>
          </svg>
          <svg width="12" height="11" aria-hidden="true">
            <use href="#icon-full-star"></use>
          </svg>
          <svg width="12" height="11" aria-hidden="true">
            <use href="#icon-star"></use>
          </svg>
          <span className="rate__count">{guitar.guitar.rating}</span><span className="rate__message"></span>
        </div>
        <p className="product-card__title">{guitar.guitar.name} {guitar.guitar.type}</p>
        <p className="product-card__price">
          <span className="visually-hidden">
            Цена:
          </span>
          {guitar.guitar.price} ₽
        </p>
      </div>
      <div className="product-card__buttons">
        <a className="button button--mini" href="!#">Подробнее</a>
        <a className="button button--red button--mini button--add-to-cart" href="!#">Купить</a>
      </div>
    </div>
  );
}

export default GuitarOffer;
