import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState, Fragment } from 'react';
import FocusLock from 'react-focus-lock';

import { getModalType, getCommentPostStatus } from '../../store/reviews/selectors';
import { getGuitar } from '../../store/guitar/selectors';
import { setModalType } from '../../store/action';
import { postComment } from '../../store/api-actions';

import { TypeModal, STARS, CommentPostStatus } from '../../const';

function ModalReviewForm() {
  const dispatch = useDispatch();

  const typeModal = useSelector(getModalType);
  const guitar = useSelector(getGuitar);
  const commentPostStatus = useSelector(getCommentPostStatus);

  const [rating, setRating] = useState(0);
  const [errorValue, setErrorValue] = useState(false);
  const [commentValue, setCommentValue] = useState('');
  const [userNametValue, setUserNametValue] = useState('');
  const [advantageValue, setAdvantageValue] = useState('');
  const [disadvantageValue, setDisadvantageValue] = useState('');

  const [
    isCommentPosting,
    isCommentNotPosted,
  ] = [
    commentPostStatus === CommentPostStatus.Posting,
    commentPostStatus === CommentPostStatus.NotPosted,
  ];

  const handleUserNameChange = (evt) => {
    setUserNametValue(evt.target.value);
  };

  const handleAdvantageChange = (evt) => {
    setAdvantageValue(evt.target.value);
  };

  const handleDisadvantageChange = (evt) => {
    setDisadvantageValue(evt.target.value);
  };

  const handleCommentChange = (evt) => {
    setCommentValue(evt.target.value);
  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    if (rating && userNametValue && advantageValue && disadvantageValue && commentValue ) {
      setErrorValue(false);
      const body = {guitarId: guitar.id, rating, userName: userNametValue, advantage: advantageValue, disadvantage: disadvantageValue, comment: commentValue};
      dispatch(postComment(body));
    } else {setErrorValue(true);}
  };

  const handleCloseFormClick = () => {
    dispatch(setModalType(''));
    document.body.style.position = '';
  };

  const handleEscapeKeyDown = (evt) => {
    if (evt.code === 'Escape') {
      dispatch(setModalType(''));
      document.body.style.position = '';
    }
  };

  const handleDivClick = () => {
    dispatch(setModalType(''));
  };

  useEffect(() => {
    document.addEventListener('keydown', handleEscapeKeyDown);

    return () => {
      document.removeEventListener('keydown', handleEscapeKeyDown);
    };
  });

  useEffect(() => {
    if (rating && userNametValue && advantageValue && disadvantageValue && commentValue ) {
      setErrorValue(false);
    }
  }, [rating, userNametValue, advantageValue, disadvantageValue, commentValue]);

  return (
    typeModal === TypeModal.OpenFormReviews && guitar !== null ?
      <div style={{position: 'relative', width: '550px', height: '410px', marginBottom: '50px'}}>
        <div className="modal is-active modal--review modal-for-ui-kit">
          <div className="modal__wrapper">
            <div className="modal__overlay" data-close-modal="true" onClick={handleDivClick} ></div>
            <FocusLock>
              <div className="modal__content" >
                <h2 className="modal__header modal__header--review title title--medium">Оставить отзыв</h2>
                <h3 className="modal__product-name title title--medium-20 title--uppercase">{guitar.name}</h3>
                <form className="form-review" onSubmit={handleFormSubmit}>
                  <div className="form-review__wrapper">
                    <div className="form-review__name-wrapper">
                      <label className="form-review__label form-review__label--required" htmlFor="user-name">Ваше Имя</label>
                      <input className="form-review__input form-review__input--name" id="user-name" type="text" autoComplete="off" tabIndex={1} onChange={handleUserNameChange} />
                      <span className="form-review__warning">Заполните поле</span>
                    </div>
                    <div><span className="form-review__label form-review__label--required" >Ваша Оценка</span>
                      <div className="rate rate--reverse">

                        {STARS.map((star) => (
                          <Fragment key={star.value}>
                            <input className="visually-hidden"  type="radio" id={`star-${star.value}`} name="rate" value={star.value}  onChange={() => setRating(star.value)} tabIndex={2} />
                            <label className="rate__label" htmlFor={`star-${star.value}`} title={star.name}></label>
                          </Fragment>
                        ))}

                        <span className="rate__count"></span>
                        <span className="rate__message">Поставьте оценку</span>
                      </div>
                    </div>
                  </div>
                  <label className="form-review__label" htmlFor="user-name"><span className="form-review__label--required">Достоинства</span></label>
                  <input className="form-review__input" id="advantage" type="text" autoComplete="off" tabIndex={3} onChange={handleAdvantageChange} />
                  <span className="form-review__warning">Заполните поле</span>

                  <label className="form-review__label" htmlFor="user-name"><span className="form-review__label--required">Недостатки</span></label>
                  <input className="form-review__input" id="disadvantage" data-testid='disadvantage' type="text" autoComplete="off" tabIndex={4} onChange={handleDisadvantageChange} />
                  <span className="form-review__warning">Заполните поле</span>

                  <label className="form-review__label" htmlFor="user-name"><span className="form-review__label--required">Комментарий</span></label>
                  <textarea className="form-review__input form-review__input--textarea" tabIndex={5} id="user-name" rows="10" autoComplete="off" onChange={handleCommentChange} ></textarea>
                  <span className="form-review__warning">Заполните поле</span>

                  <button className="button button--medium-20 form-review__button hidden" id="buttom-form" tabIndex={6} type="submit" disabled={isCommentPosting}>Отправить отзыв</button>

                  {isCommentNotPosted && (
                    <p style={{color: 'red', textAlign: 'center'}}>Ошибка отправки комментария. Сервер не отвечает!</p>
                  )}
                  {errorValue && (
                    <p style={{color: 'red', textAlign: 'center'}}>Все поля должны быть заполнены!</p>
                  )}

                </form>
                <button className="modal__close-btn button-cross" type="button" id="button-close" tabIndex={7} aria-label="Закрыть" onClick={handleCloseFormClick}>
                  <span className="button-cross__icon"></span>
                  <span className="modal__close-btn-interactive-area"></span>
                </button>
              </div>
            </FocusLock>
          </div>
        </div>
      </div> : ''
  );
}

export default ModalReviewForm;
