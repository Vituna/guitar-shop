import { STAR_COUNT } from '../../const';

function Rating(rating) {
  const countRating = Math.round(rating.rating);
  const countRatingArray = new Array(countRating).fill(countRating);
  const countRatingNull = STAR_COUNT - countRating;
  const countRatingNullArray = new Array(countRatingNull).fill(countRatingNull);

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
