import { useSelector, useDispatch } from 'react-redux';
import { useMemo, useState } from 'react';

import { setModalType } from '../../store/action';
import { getComments } from '../../store/reviews/selectors';

import Rating from '../rating/rating';

import { getFormatDateValue } from '../../utils';
import { TypeModal } from '../../const';

/* eslint-disable no-console */
function Reviews() {
  const dispatch = useDispatch();

  const comments = useSelector(getComments);

  const [moreComment, setMoreComment] = useState(3);

  const reviewsToDisplay = useMemo(() =>
    [...comments]
      .sort((a, b) => Date.parse(b.createAt) - Date.parse(a.createAt))
      .slice(0, moreComment),
  [comments, moreComment]);

  const handleShowMoreClick = () => {
    setMoreComment(moreComment + 3);
  };

  const handleSckrollUp = (evt) => {
    evt.preventDefault();
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -20180);
    }
  };

  const handleOpenForm = (evt) => {
    evt.preventDefault();
    dispatch(setModalType(TypeModal.OpenFormReviews));
  };

  return (
    <section className="reviews">
      <h3 className="reviews__title title title--bigger">Отзывы</h3>
      <a className="button button--red-border button--big reviews__sumbit-button" href="!#" onClick={handleOpenForm}>Оставить отзыв</a>
      {reviewsToDisplay.map((comment) => (
        <div className="review" key={comment.id}>
          <div className="review__wrapper">
            <h4 className="review__title review__title--author title title--lesser">{comment.userName}</h4>
            <span className="review__date">{getFormatDateValue(comment.createAt)}</span>
          </div>
          <div className="rate review__rating-panel" aria-hidden="true"><span className="visually-hidden">Рейтинг:</span>
            <Rating rating={comment.rating}/>
          </div>
          <h4 className="review__title title title--lesser">Достоинства:</h4>
          <p className="review__value">{comment.advantage}</p>
          <h4 className="review__title title title--lesser">Недостатки:</h4>
          <p className="review__value">{comment.disadvantage}</p>
          <h4 className="review__title title title--lesser">Комментарий:</h4>
          <p className="review__value">{comment.comment}</p>
        </div>
      ),
      )}
      {comments.length > moreComment ? <button className="button button--medium reviews__more-button" onClick={handleShowMoreClick}>Показать еще отзывы</button> : ''}
      <a className="button button--up button--red-border button--big reviews__up-button" href={'/'} onClick={handleSckrollUp}>Наверх</a>
    </section>
  );
}

export default Reviews;
