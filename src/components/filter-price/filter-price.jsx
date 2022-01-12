import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getGuitars } from '../../store/guitar/selectors';
import { changeMinPrice, changeMaxPrice } from '../../store/action';

import { getMinMaxPricesGuitars } from '../../utils';

function FilterPrice() {
  const dispatch = useDispatch();

  const guitars = useSelector(getGuitars);
  const {minPrices, maxPrices} = getMinMaxPricesGuitars(guitars);

  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);

  const handleInputMinPriceChange = (evt) => {
    setMinPrice(evt.target.value);
  };

  const handleInputMaxPriceChange = (evt) => {
    setMaxPrice(evt.target.value);
  };

  const handleInputMinPriceOnBlur = () => {
    if (minPrice !== null && minPrice < minPrices) {
      setMinPrice(minPrices);
      dispatch(changeMinPrice(minPrices));
    } else if (minPrice !== null && minPrice > maxPrices) {
      setMinPrice(maxPrices);
      dispatch(changeMinPrice(maxPrices));
    } else {
      dispatch(changeMinPrice(minPrice));
    }
  };

  const handleInputMaxPriceOnFocus = () => {
    if (maxPrice !== null && maxPrice < minPrices) {
      setMaxPrice(minPrices);
      dispatch(changeMaxPrice(minPrices));
    } else if (maxPrice !== null && maxPrice > maxPrices) {
      setMaxPrice(maxPrices);
      dispatch(changeMaxPrice(maxPrices));
    } else {
      dispatch(changeMaxPrice(maxPrice));
    }
  };

  return (
    <fieldset className="catalog-filter__block">
      <legend className="catalog-filter__block-title">Цена, ₽</legend>
      <div className="catalog-filter__price-range">
        <div className="form-input">
          <label className="visually-hidden">Минимальная цена</label>
          <input type="number" placeholder={`${minPrices}`} id="priceMin" name="от" onBlur={handleInputMinPriceOnBlur} value={`${minPrice}`}  onChange={handleInputMinPriceChange} />
        </div>
        <div className="form-input">
          <label className="visually-hidden">Максимальная цена</label>
          <input type="number" placeholder={`${maxPrices}`} id="priceMax" name="до" onBlur={handleInputMaxPriceOnFocus}  value={`${maxPrice}`}  onChange={handleInputMaxPriceChange} />
        </div>
      </div>
    </fieldset>
  );
}

export default FilterPrice;
