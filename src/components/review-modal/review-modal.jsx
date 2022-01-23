import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState, useRef, Fragment } from 'react';

import { getModalType } from '../../store/reviews/selectors';
import { getGuitar } from '../../store/guitar/selectors';
import { setModalType } from '../../store/action';
import { postComment } from '../../store/api-actions';


import { TypeModal } from '../../const';

const STARS = [
  {value: 5, name: 'Отлично'},
  {value: 4, name: 'Хорошо'},
  {value: 3, name: 'Нормально'},
  {value: 2, name: 'Плохо'},
  {value: 1, name: 'Ужасно'},
];


function ReviewStar(star) {
  const stars = star.star;
  const onChange = star.Change;

  return (
    <>
      <input className="visually-hidden"  type="radio" id={`star-${stars.value}`} name="rate" value={stars.value}  onChange={onChange}/>
      <label className="rate__label" htmlFor={`star-${stars.value}`} title={stars.name}></label>
    </>
  );
}


function ReviewModal() {
  const dispatch = useDispatch();

  const typeModal = useSelector(getModalType);
  const guitar = useSelector(getGuitar);

  const [rating, setRating] = useState(0);

  const userNameRef = useRef(null);
  const advantageRef = useRef(null);
  const disadvantageRef = useRef(null);
  const commentRef = useRef(null);

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    const userName = userNameRef.current?.value;
    const advantage = advantageRef.current?.value;
    const disadvantage = disadvantageRef.current?.value;
    const comment = commentRef.current?.value;

    if (rating && userName && advantage && disadvantage && comment ) {
      const body = {guitarId: guitar.id, rating, userName, advantage, disadvantage, comment};
      dispatch(postComment(body));
    }
  };

  const handleCloseFormClick = () => {
    dispatch(setModalType(TypeModal.CloseFormReviews));
  };

  const handleEscapeKeyDown = (evt) => {
    if (evt.code === 'Escape') {
      dispatch(setModalType(TypeModal.CloseFormReviews));
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleEscapeKeyDown);

    return () => {
      document.removeEventListener('keydown', handleEscapeKeyDown);
    };

  });

  return (
    typeModal.modalType === TypeModal.OpenFormReviews &&
      <div style={{position: 'relative', width: '550px', height: '410px', marginBottom: '50px'}}>
        <div className="modal is-active modal--review modal-for-ui-kit">
          <div className="modal__wrapper">
            <div className="modal__overlay" data-close-modal></div>
            <div className="modal__content">
              <h2 className="modal__header modal__header--review title title--medium">Оставить отзыв</h2>
              <h3 className="modal__product-name title title--medium-20 title--uppercase">{guitar.name}</h3>
              <form className="form-review" onSubmit={handleFormSubmit}>
                <div className="form-review__wrapper">
                  <div className="form-review__name-wrapper">
                    <label className="form-review__label form-review__label--required" htmlFor="user-name">Ваше Имя</label>
                    <input className="form-review__input form-review__input--name" ref={userNameRef} id="user-name" type="text" autoComplete="off" /><span className="form-review__warning">Заполните поле</span>
                  </div>
                  <div><span className="form-review__label form-review__label--required">Ваша Оценка</span>
                    <div className="rate rate--reverse">

                      {/* {STARS.map((star) => <ReviewStar star={star} key={star.value} Change={() => setRating(star.value)}/>)} */}
                      {STARS.map((star) => (
                        <Fragment key={star.value}>
                          <input className="visually-hidden"  type="radio" id={`star-${star.value}`} name="rate" value={star.value}  onChange={() => setRating(star.value)}/>
                          <label className="rate__label" htmlFor={`star-${star.value}`} title={star.name}></label>
                        </Fragment>
                      ))}

                      <span className="rate__count"></span>
                      <span className="rate__message">Поставьте оценку</span>
                    </div>
                  </div>
                </div>
                <label className="form-review__label" htmlFor="user-name">Достоинства</label>
                <input className="form-review__input" ref={advantageRef} id="pros" type="text" autoComplete="off" />
                <label className="form-review__label" htmlFor="user-name">Недостатки</label>
                <input className="form-review__input" ref={disadvantageRef} id="user-name" type="text" autoComplete="off" />
                <label className="form-review__label" htmlFor="user-name">Комментарий</label>
                <textarea className="form-review__input form-review__input--textarea" ref={commentRef} id="user-name" rows="10" autoComplete="off"></textarea>
                <button className="button button--medium-20 form-review__button" type="submit">Отправить отзыв</button>
              </form>
              <button className="modal__close-btn button-cross" type="button" aria-label="Закрыть" onClick={handleCloseFormClick}>
                <span className="button-cross__icon"></span>
                <span className="modal__close-btn-interactive-area"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
  );

}

export default ReviewModal;
