import { useDispatch, useSelector } from 'react-redux';

import { getGuitarsPrice } from '../../store/filters/selectors';
import { changeMinPrice, changeMaxPrice, currentNumberPage } from '../../store/action';
import { getMinPrice, getMaxPrice } from '../../store/filters/selectors';

import { getMinMaxPricesGuitars } from '../../utils';

function FilterPrice() {
  const dispatch = useDispatch();

  const guitars = useSelector(getGuitarsPrice);
  const minPriceState = useSelector(getMinPrice);
  const maxPriceState = useSelector(getMaxPrice);

  const {minPrices, maxPrices} = getMinMaxPricesGuitars(guitars);

  const handleInputMinPriceChange = (evt) => {
    const value = evt.target.value;
    dispatch(changeMinPrice(value));
    dispatch(currentNumberPage(1));
  };

  const handleInputMaxPriceChange = (evt) => {
    const value = evt.target.value;
    dispatch(changeMaxPrice(value));
    dispatch(currentNumberPage(1));
    if (!value) {
      dispatch(changeMaxPrice(''));
    }
  };

  const handleInputMinPriceOnBlur = () => {
    if (minPriceState !== '' && minPriceState < minPrices) {
      dispatch(changeMinPrice(minPrices));
    } else if (minPriceState !== '' && minPriceState > maxPrices) {
      dispatch(changeMinPrice(maxPrices));
    } else {
      dispatch(changeMinPrice(minPriceState));
    }
  };

  const handleInputMaxPriceOnFocus = () => {
    if (maxPriceState !== '' && maxPriceState < minPrices) {
      dispatch(changeMaxPrice(minPrices));
    } else if (maxPriceState !== '' && maxPriceState > maxPrices) {
      dispatch(changeMaxPrice(maxPrices));
    } else {
      dispatch(changeMaxPrice(maxPriceState));
    }
  };

  return (
    <fieldset className="catalog-filter__block">
      <legend className="catalog-filter__block-title">Цена, ₽</legend>
      <div className="catalog-filter__price-range">
        <div className="form-input">
          <label className="visually-hidden">Минимальная цена</label>
          <input type="number" placeholder={`${minPrices}`} min={`${minPrices}`} max={`${maxPrices}`} id="priceMin" name="от"
            onBlur={handleInputMinPriceOnBlur}
            value={`${minPriceState}`}
            onChange={handleInputMinPriceChange}
          />
        </div>
        <div className="form-input">
          <label className="visually-hidden">Максимальная цена</label>
          <input type="number" placeholder={`${maxPrices}`} id="priceMax" name="до"
            onBlur={handleInputMaxPriceOnFocus}
            value={maxPriceState}
            onChange={handleInputMaxPriceChange}
          />
        </div>
      </div>
    </fieldset>
  );
}

export default FilterPrice;
