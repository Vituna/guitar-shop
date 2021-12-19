/* eslint-disable no-console */
import { useDispatch, useSelector } from 'react-redux';

import { changeTypeFilter } from '../../store/action';
import { getTypeFilter } from '../../store/filters/selectors';

import { GuitarType } from '../../const';
import { getTranslationGuitarType } from '../../utils';

function FilterType() {
  const dispatch = useDispatch();

  const filterType = useSelector(getTypeFilter);

  const handleInputChange = (name) => {

    const typeList = [...filterType];
    const index = typeList.findIndex((item) => item === name);

    if (index === -1) {
      typeList.push(name);
    } else {
      typeList.splice(index, 1);
    }
    console.log(typeList);
    dispatch(changeTypeFilter(typeList));
  };

  return (
    <fieldset className="catalog-filter__block">
      <legend className="catalog-filter__block-title">Тип гитар</legend>

      {GuitarType.map((name) => (
        <div className="form-checkbox catalog-filter__block-item" key={name}>
          <input className="visually-hidden" type="checkbox" id={getTranslationGuitarType(name)} name={getTranslationGuitarType(name)} onChange={() => handleInputChange(getTranslationGuitarType(name) )} />
          <label htmlFor={getTranslationGuitarType(name)}>{name}</label>
        </div>
      ))}

    </fieldset>
  );
}

export default FilterType;
