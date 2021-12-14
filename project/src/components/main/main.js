function Main() {

  return(
    <div class="wrapper">
      <header class="header" id="header">
        <div class="container header__wrapper"><a class="header__logo logo"><img class="logo__img" width="70" height="70" src="./img/svg/logo.svg" alt="Логотип" /></a>
          <nav class="main-nav">
            <ul class="main-nav__list">
              <li><a class="link main-nav__link link--current" href="#">Каталог</a>
              </li>
              <li><a class="link main-nav__link" href="#">Где купить?</a>
              </li>
              <li><a class="link main-nav__link" href="#">О компании</a>
              </li>
            </ul>
          </nav>
          <div class="form-search">
            <form class="form-search__form">
              <button class="form-search__submit" type="submit">
                <svg class="form-search__icon" width="14" height="15" aria-hidden="true">
                  <use href="#icon-search"></use>
                </svg><span class="visually-hidden">Начать поиск</span>
              </button>
              <input class="form-search__input" id="search" type="text" autocomplete="off" placeholder="что вы ищите?" />
              <label class="visually-hidden" for="search">Поиск</label>
            </form>
            <ul class="form-search__select-list hidden">
              <li class="form-search__select-item" tabindex="0">Четстер Plus</li>
              <li class="form-search__select-item" tabindex="0">Четстер UX</li>
              <li class="form-search__select-item" tabindex="0">Четстер UX2</li>
              <li class="form-search__select-item" tabindex="0">Четстер UX3</li>
              <li class="form-search__select-item" tabindex="0">Четстер UX4</li>
              <li class="form-search__select-item" tabindex="0">Четстер UX5</li>
            </ul>
          </div><a class="header__cart-link" href="#" aria-label="Корзина">
            <svg class="header__cart-icon" width="14" height="14" aria-hidden="true">
              <use href="#icon-basket"></use>
            </svg><span class="visually-hidden">Перейти в корзину</span><span class="header__cart-count">2</span></a>
        </div>
      </header>
      <main class="page-content">
        <div class="container">
          <h1 class="page-content__title title title--bigger">Каталог гитар</h1>
          <ul class="breadcrumbs page-content__breadcrumbs">
            <li class="breadcrumbs__item"><a class="link" href="./main.html">Главная</a>
            </li>
            <li class="breadcrumbs__item"><a class="link">Каталог</a>
            </li>
          </ul>
          <div class="catalog">
            <form class="catalog-filter">
              <h2 class="title title--bigger catalog-filter__title">Фильтр</h2>
              <fieldset class="catalog-filter__block">
                <legend class="catalog-filter__block-title">Цена, ₽</legend>
                <div class="catalog-filter__price-range">
                  <div class="form-input">
                    <label class="visually-hidden">Минимальная цена</label>
                    <input type="number" placeholder="1 000" id="priceMin" name="от" />
                  </div>
                  <div class="form-input">
                    <label class="visually-hidden">Максимальная цена</label>
                    <input type="number" placeholder="30 000" id="priceMax" name="до" />
                  </div>
                </div>
              </fieldset>
              <fieldset class="catalog-filter__block">
                <legend class="catalog-filter__block-title">Тип гитар</legend>
                <div class="form-checkbox catalog-filter__block-item">
                  <input class="visually-hidden" type="checkbox" id="acoustic" name="acoustic" />
                  <label for="acoustic">Акустические гитары</label>
                </div>
                <div class="form-checkbox catalog-filter__block-item">
                  <input class="visually-hidden" type="checkbox" id="electric" name="electric" checked />
                  <label for="electric">Электрогитары</label>
                </div>
                <div class="form-checkbox catalog-filter__block-item">
                  <input class="visually-hidden" type="checkbox" id="ukulele" name="ukulele" checked />
                  <label for="ukulele">Укулеле</label>
                </div>
              </fieldset>
              <fieldset class="catalog-filter__block">
                <legend class="catalog-filter__block-title">Количество струн</legend>
                <div class="form-checkbox catalog-filter__block-item">
                  <input class="visually-hidden" type="checkbox" id="4-strings" name="4-strings" checked />
                  <label for="4-strings">4</label>
                </div>
                <div class="form-checkbox catalog-filter__block-item">
                  <input class="visually-hidden" type="checkbox" id="6-strings" name="6-strings" checked />
                  <label for="6-strings">6</label>
                </div>
                <div class="form-checkbox catalog-filter__block-item">
                  <input class="visually-hidden" type="checkbox" id="7-strings" name="7-strings" />
                  <label for="7-strings">7</label>
                </div>
                <div class="form-checkbox catalog-filter__block-item">
                  <input class="visually-hidden" type="checkbox" id="12-strings" name="12-strings" disabled />
                  <label for="12-strings">12</label>
                </div>
              </fieldset>
            </form>
            <div class="catalog-sort">
              <h2 class="catalog-sort__title">Сортировать:</h2>
              <div class="catalog-sort__type">
                <button class="catalog-sort__type-button catalog-sort__type-button--active" aria-label="по цене" tabindex="-1">по цене</button>
                <button class="catalog-sort__type-button" aria-label="по популярности">по популярности</button>
              </div>
              <div class="catalog-sort__order">
                <button class="catalog-sort__order-button catalog-sort__order-button--up catalog-sort__order-button--active" aria-label="По возрастанию" tabindex="-1"></button>
                <button class="catalog-sort__order-button catalog-sort__order-button--down" aria-label="По убыванию"></button>
              </div>
            </div>
            <div class="cards catalog__cards">
              <div class="product-card"><img src="img/content/catalog-product-0.jpg" srcset="img/content/catalog-product-0@2x.jpg 2x" width="75" height="190" alt="СURT Z30 Plus Acoustics" />
                <div class="product-card__info">
                  <div class="rate product-card__rate" aria-hidden="true"><span class="visually-hidden">Рейтинг:</span>
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
                    </svg><span class="rate__count">9</span><span class="rate__message"></span>
                  </div>
                  <p class="product-card__title">СURT Z30 Plus Acoustics</p>
                  <p class="product-card__price"><span class="visually-hidden">Цена:</span>129 500 ₽
                  </p>
                </div>
                <div class="product-card__buttons"><a class="button button--mini" href="#">Подробнее</a><a class="button button--red button--mini button--add-to-cart" href="#">Купить</a>
                </div>
              </div>
              <div class="product-card"><img src="img/content/catalog-product-1.jpg" srcset="img/content/catalog-product-1@2x.jpg 2x" width="75" height="190" alt="Честер Bass" />
                <div class="product-card__info">
                  <div class="rate product-card__rate" aria-hidden="true"><span class="visually-hidden">Рейтинг:</span>
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
                    </svg><span class="rate__count">9</span><span class="rate__message"></span>
                  </div>
                  <p class="product-card__title">Честер Bass</p>
                  <p class="product-card__price"><span class="visually-hidden">Цена:</span>51 100 ₽
                  </p>
                </div>
                <div class="product-card__buttons"><a class="button button--mini" href="#">Подробнее</a><a class="button button--red-border button--mini button--in-cart" href="#">В Корзине</a>
                </div>
              </div>
              <div class="product-card"><img src="img/content/catalog-product-2.jpg" srcset="img/content/catalog-product-2@2x.jpg 2x" width="75" height="190" alt="СURT Z30 Plus" />
                <div class="product-card__info">
                  <div class="rate product-card__rate" aria-hidden="true"><span class="visually-hidden">Рейтинг:</span>
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
                    </svg><span class="rate__count">76</span><span class="rate__message"></span>
                  </div>
                  <p class="product-card__title">СURT Z30 Plus</p>
                  <p class="product-card__price"><span class="visually-hidden">Цена:</span>9 700 ₽
                  </p>
                </div>
                <div class="product-card__buttons"><a class="button button--mini" href="#">Подробнее</a><a class="button button--red button--mini button--add-to-cart" href="#">Купить</a>
                </div>
              </div>
              <div class="product-card"><img src="img/content/catalog-product-3.jpg" srcset="img/content/catalog-product-3@2x.jpg 2x" width="75" height="190" alt="СURT Z30 Plus Acoustics" />
                <div class="product-card__info">
                  <div class="rate product-card__rate" aria-hidden="true"><span class="visually-hidden">Рейтинг:</span>
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
                    </svg><span class="rate__count">9</span><span class="rate__message"></span>
                  </div>
                  <p class="product-card__title">СURT Z30 Plus Acoustics</p>
                  <p class="product-card__price"><span class="visually-hidden">Цена:</span>129 500 ₽
                  </p>
                </div>
                <div class="product-card__buttons"><a class="button button--mini" href="#">Подробнее</a><a class="button button--red button--mini button--add-to-cart" href="#">Купить</a>
                </div>
              </div>
              <div class="product-card"><img src="img/content/catalog-product-4.jpg" srcset="img/content/catalog-product-4@2x.jpg 2x" width="75" height="190" alt="СURT Z30 Plus" />
                <div class="product-card__info">
                  <div class="rate product-card__rate" aria-hidden="true"><span class="visually-hidden">Рейтинг:</span>
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
                    </svg><span class="rate__count">76</span><span class="rate__message"></span>
                  </div>
                  <p class="product-card__title">СURT Z30 Plus</p>
                  <p class="product-card__price"><span class="visually-hidden">Цена:</span>9 700 ₽
                  </p>
                </div>
                <div class="product-card__buttons"><a class="button button--mini" href="#">Подробнее</a><a class="button button--red button--mini button--add-to-cart" href="#">Купить</a>
                </div>
              </div>
              <div class="product-card"><img src="img/content/catalog-product-5.jpg" srcset="img/content/catalog-product-5@2x.jpg 2x" width="75" height="190" alt="Честер Bass" />
                <div class="product-card__info">
                  <div class="rate product-card__rate" aria-hidden="true"><span class="visually-hidden">Рейтинг:</span>
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
                    </svg><span class="rate__count">9</span><span class="rate__message"></span>
                  </div>
                  <p class="product-card__title">Честер Bass</p>
                  <p class="product-card__price"><span class="visually-hidden">Цена:</span>51 100 ₽
                  </p>
                </div>
                <div class="product-card__buttons"><a class="button button--mini" href="#">Подробнее</a><a class="button button--red-border button--mini button--in-cart" href="#">В Корзине</a>
                </div>
              </div>
              <div class="product-card"><img src="img/content/catalog-product-6.jpg" srcset="img/content/catalog-product-6@2x.jpg 2x" width="75" height="190" alt="СURT Z30 Plus Acoustics" />
                <div class="product-card__info">
                  <div class="rate product-card__rate" aria-hidden="true"><span class="visually-hidden">Рейтинг:</span>
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
                    </svg><span class="rate__count">9</span><span class="rate__message"></span>
                  </div>
                  <p class="product-card__title">СURT Z30 Plus Acoustics</p>
                  <p class="product-card__price"><span class="visually-hidden">Цена:</span>129 500 ₽
                  </p>
                </div>
                <div class="product-card__buttons"><a class="button button--mini" href="#">Подробнее</a><a class="button button--red button--mini button--add-to-cart" href="#">Купить</a>
                </div>
              </div>
              <div class="product-card"><img src="img/content/catalog-product-7.jpg" srcset="img/content/catalog-product-7@2x.jpg 2x" width="75" height="190" alt="СURT Z30 Plus Acoustics" />
                <div class="product-card__info">
                  <div class="rate product-card__rate" aria-hidden="true"><span class="visually-hidden">Рейтинг:</span>
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
                    </svg><span class="rate__count">9</span><span class="rate__message"></span>
                  </div>
                  <p class="product-card__title">СURT Z30 Plus Acoustics</p>
                  <p class="product-card__price"><span class="visually-hidden">Цена:</span>129 500 ₽
                  </p>
                </div>
                <div class="product-card__buttons"><a class="button button--mini" href="#">Подробнее</a><a class="button button--red button--mini button--add-to-cart" href="#">Купить</a>
                </div>
              </div>
              <div class="product-card"><img src="img/content/catalog-product-8.jpg" srcset="img/content/catalog-product-8@2x.jpg 2x" width="75" height="190" alt="СURT Z30 Plus" />
                <div class="product-card__info">
                  <div class="rate product-card__rate" aria-hidden="true"><span class="visually-hidden">Рейтинг:</span>
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
                    </svg><span class="rate__count">76</span><span class="rate__message"></span>
                  </div>
                  <p class="product-card__title">СURT Z30 Plus</p>
                  <p class="product-card__price"><span class="visually-hidden">Цена:</span>9 700 ₽
                  </p>
                </div>
                <div class="product-card__buttons"><a class="button button--mini" href="#">Подробнее</a><a class="button button--red button--mini button--add-to-cart" href="#">Купить</a>
                </div>
              </div>
            </div>
            <div class="pagination page-content__pagination">
              <ul class="pagination__list">
                <li class="pagination__page pagination__page--active"><a class="link pagination__page-link" href="1">1</a>
                </li>
                <li class="pagination__page"><a class="link pagination__page-link" href="2">2</a>
                </li>
                <li class="pagination__page"><a class="link pagination__page-link" href="3">3</a>
                </li>
                <li class="pagination__page pagination__page--next" id="next"><a class="link pagination__page-link" href="2">Далее</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <footer class="footer">
        <div class="footer__container container">
          <a class="footer__logo logo">
            <img class="logo__img" width="70" height="70" src="./img/svg/logo.svg" alt="Логотип" />
          </a>
          <div class="socials footer__socials">
            <ul class="socials__list">
              <li class="socials-item"><a class="socials__link" href="https://www.facebook.com/" aria-label="facebook">
                  <svg class="socials__icon" width="24" height="24" aria-hidden="true">
                    <use href="#icon-facebook"></use>
                  </svg></a></li>
              <li class="socials-item"><a class="socials__link" href="https://www.instagram.com/" aria-label="instagram">
                  <svg class="socials__icon" width="24" height="24" aria-hidden="true">
                    <use href="#icon-instagram"></use>
                  </svg></a></li>
              <li class="socials-item"><a class="socials__link" href="https://www.twitter.com/" aria-label="twitter">
                  <svg class="socials__icon" width="24" height="24" aria-hidden="true">
                    <use href="#icon-twitter"></use>
                  </svg></a></li>
            </ul>
          </div>
          <section class="footer__nav-section footer__nav-section--info">
            <h2 class="footer__nav-title">О нас</h2>
            <p class="footer__nav-content footer__nav-content--font-secondary">Магазин гитар, музыкальных инструментов и гитарная мастерская <br/> в Санкт-Петербурге.<br/><br/>Все инструменты проверены, отстроены <br/> и доведены до идеала!</p>
          </section>
          <section class="footer__nav-section footer__nav-section--links">
            <h2 class="footer__nav-title">Информация</h2>
            <ul class="footer__nav-list">
              <li class="footer__nav-list-item"><a class="link" href="#top">Где купить?</a>
              </li>
              <li class="footer__nav-list-item"><a class="link" href="#top">Блог</a>
              </li>
              <li class="footer__nav-list-item"><a class="link" href="#top">Вопрос - ответ</a>
              </li>
              <li class="footer__nav-list-item"><a class="link" href="#top">Возврат</a>
              </li>
              <li class="footer__nav-list-item"><a class="link" href="#top">Сервис-центры</a>
              </li>
            </ul>
          </section>
          <section class="footer__nav-section footer__nav-section--contacts">
            <h2 class="footer__nav-title">Контакты</h2>
            <p class="footer__nav-content">г. Санкт-Петербург,<br/> м. Невский проспект, <br/>ул. Казанская 6.</p>
            <div class="footer__nav-content">
              <svg class="footer__icon" width="8" height="8" aria-hidden="true">
                <use href="#icon-phone"></use>
              </svg><a class="link" href="tel:88125005050"> 8-812-500-50-50</a>
            </div>
            <p class="footer__nav-content">Режим работы:<br/><span class="footer__span">
                <svg class="footer__icon" width="13" height="13" aria-hidden="true">
                  <use href="#icon-clock"></use>
                </svg><span> с 11:00 до 20:00</span><span>без выходных</span></span></p>
          </section>
        </div>
      </footer>
    </div>
  );
}

export default Main;
