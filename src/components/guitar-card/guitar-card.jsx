import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import { fetchCurrentGuitarAction, fetchComments } from '../../store/api-actions';
import { getGuitar, getGuitarLoading, getGuitarsErrorStatus, getErrorNoFound } from '../../store/guitar/selectors';
import { getComments, getCommentNew, getCommentPostStatus } from '../../store/reviews/selectors';
import { setModalType, setGuitarAddModal } from '../../store/action';

import Rating from '../rating/rating';
import Reviews from '../reviews/reviews';
import Preloader from '../preloader/preloader';
import ServerError from '../serverError/serverError';
import NoFound from '../no-found/no-found';

import { getTypeNameUpperCase, getTranslationGuitarTypeRus } from '../../utils';
import { TypeModal, Tabs, CommentPostStatus } from '../../const';

function GuitarCard() {
  const dispatch = useDispatch();

  const { id } = useParams();

  const guitar = useSelector(getGuitar);
  const guitarLoading = useSelector(getGuitarLoading);
  const comments = useSelector(getComments);
  const commentNew = useSelector(getCommentNew);
  const isError = useSelector(getGuitarsErrorStatus);
  const errorNoFound = useSelector(getErrorNoFound);
  const errorComments = useSelector(getCommentPostStatus);

  const [tabs, setTabs] = useState(Tabs.Characteristic);

  useEffect(() => {
    dispatch(fetchCurrentGuitarAction(id));
    dispatch(fetchComments(id));
  }, [dispatch, id]);

  const handleCharacteristicClick = (evt) => {
    evt.preventDefault();
    setTabs(Tabs.Characteristic);
  };

  const handleDescriptionClick = (evt) => {
    evt.preventDefault();
    setTabs(Tabs.Description);
  };

  const handleCardAddClick = (evt) => {
    evt.preventDefault();
    dispatch(setModalType(TypeModal.OpenCartAdd));
    dispatch(setGuitarAddModal(guitar));
    document.body.style.position = 'fixed';
  };

  if (isError) {
    return  <ServerError />;
  }

  if (errorNoFound) {
    return  <NoFound />;
  }

  if (guitarLoading) {
    return <Preloader />;
  }

  const commentsAll = comments.concat(commentNew);

  return (
    <div className="wrapper">

      { guitar && (
        <main className="page-content">
          <div className="container">
            <h1 className="page-content__title title title--bigger">{guitar.name}</h1>
            <ul className="breadcrumbs page-content__breadcrumbs">
              <li className="breadcrumbs__item"><a className="link" href="./main.html">Главная</a>
              </li>
              <li className="breadcrumbs__item"><a className="link" href="/catalog/page_1">Каталог</a>
              </li>
              <li className="breadcrumbs__item"><a className="link" href="!#">{guitar.name}</a>
              </li>
            </ul>
            <div className="product-container">
              <img className="product-container__img" src={`../${guitar.previewImg}`} srcSet={`../${guitar.previewImg}`} width="90" height="235" alt="" />
              <div className="product-container__info-wrapper">
                <h2 className="product-container__title title title--big title--uppercase">{guitar.name}</h2>
                <div className="rate product-container__rating" aria-hidden="true"><span className="visually-hidden">Рейтинг:</span>

                  <Rating rating={guitar.rating}/>

                  <span className="rate__count">{commentsAll.length}</span><span className="rate__message"></span>
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
                          <td className="tabs__value">{getTypeNameUpperCase(getTranslationGuitarTypeRus(guitar.type))}</td>
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
                <p className="product-container__price-info product-container__price-info--value">{guitar.price} ₽</p>
                <a className="button button--red button--big product-container__button" href="!#" onClick={handleCardAddClick}>Добавить в корзину</a>
              </div>
            </div>

            {errorComments === CommentPostStatus.NotPosted ? <h3 className="reviews__title title title--bigger">Ошибка загрузки комментариев</h3> : <Reviews />}

          </div>
        </main>
      )}
    </div>
  );
}

export default GuitarCard;
