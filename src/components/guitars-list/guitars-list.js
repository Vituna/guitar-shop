import { useSelector } from 'react-redux';

import { getGuitars } from '../../store/guitar/selectors';
import { getCurrentSearch } from '../../store/filters/selectors';

import  GuitarOffer  from '../guitar-offer/guitar-offer';

import { getFilterGuitarsName } from '../../utils';

function GuitarsList() {
  const guitars = useSelector(getGuitars);
  const currentSearch = useSelector(getCurrentSearch);


  return (
    <div className="cards catalog__cards">

      {getFilterGuitarsName(guitars, currentSearch).map((guitar) => (
        <GuitarOffer key={guitar.id} guitar={guitar}/>
      ))}

    </div>
  );
}

export default GuitarsList;
