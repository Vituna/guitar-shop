import { useDispatch, useSelector } from 'react-redux';

import { changeTypeFilter } from '../../store/action';
import { getTypeFilter } from '../../store/filters/selectors';

import { GuitarType } from '../../const';
import { getTranslationGuitarType } from '../../utils';

function FilterType() {
  const dispatch = useDispatch();

  const filterType = useSelector(getTypeFilter);

  const handleInputChange = (name) => {
    const type = [...filterType];
    const index = type.findIndex((item) => item === name);

    index === -1 ? type.push(name) : type.splice(index, 1);

    dispatch(changeTypeFilter(type));
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
