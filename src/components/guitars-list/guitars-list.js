import { useSelector } from 'react-redux';

import { getGuitars } from '../../store/guitar/selectors';

import  GuitarOffer  from '../guitar-offer/guitar-offer';

function GuitarsList() {
  const guitars = useSelector(getGuitars);

  return (
    <div className="cards catalog__cards">

      {guitars.map((guitar) => (
        <GuitarOffer key={guitar.id} guitar={guitar}/>
      ))}

    </div>
  );
}

export default GuitarsList;
