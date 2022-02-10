import { STAR_COUNT } from '../../const';

function Rating(rating) {
  const countRating = Math.round(rating.rating);
  const stars = new Array(STAR_COUNT).fill(null);
  const countRatingArray = stars.slice(0, countRating);
  const countRatingNullArray = stars.slice(countRating, stars.length);

  return (
    <>
      {countRatingArray.map(() => (
        <svg width="12" height="11" aria-hidden="true" key={Math.random()}>
          <use href="#icon-full-star"></use>
        </svg>))}

      {countRatingNullArray.map(() => (
        <svg width="12" height="11" aria-hidden="true" key={Math.random()}>
          <use href="#icon-star"></use>
        </svg>))}
    </>
  );
}

export default Rating;
