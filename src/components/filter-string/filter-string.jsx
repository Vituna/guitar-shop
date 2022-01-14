import { useDispatch, useSelector } from 'react-redux';

import { changeStringFilter } from '../../store/action';
import { getStringFilter, getTypeFilter } from '../../store/filters/selectors';

import { AMOUNT_STRINGS_GUITAR, GuitarTypeString } from '../../const';

function FilterString() {
  const dispatch = useDispatch();

  const filterType = useSelector(getTypeFilter);
  const filterString = useSelector(getStringFilter);


  const stringsArray = filterType.map((type) => GuitarTypeString[type]);
  const strings = stringsArray.reduce((acc, elem) =>[...acc, ...elem] , []);
  const getActivString = (count) => strings.every((item) => item !== count) && !!strings.length;
  const getChekedString = (count) => filterString.some((item) => item === count);

  const handleInputChange = (count) => {
    const userStrings = [...filterString];
    const index = userStrings.findIndex((item) => item === count);

    index === -1 ? userStrings.push(count) : userStrings.splice(index, 1);

    dispatch(changeStringFilter(userStrings));
  };

  return (
    <fieldset className="catalog-filter__block">
      <legend className="catalog-filter__block-title">Количество струн</legend>

      {AMOUNT_STRINGS_GUITAR.map((count) => (
        <div className="form-checkbox catalog-filter__block-item" key={count}>
          <input className="visually-hidden" type="checkbox" id={`${count}-strings`} name={`${count}-strings`}
            disabled={getActivString(count)}
            checked={getChekedString(count)}
            onChange={() => handleInputChange(count)}
          />
          <label htmlFor={`${count}-strings`}>{count}</label>
        </div>
      ))}

    </fieldset>
  );
}

export default FilterString;
