import { useSelector, useDispatch } from 'react-redux';

import { getModalType } from '../../store/reviews/selectors';
import { getGuitarAdd } from '../../store/guitar/selectors';
import { getGuitarIdAndCount } from '../../store/basket/selectors';
import { setModalType, setGuitarIdAndCount } from '../../store/action';
import Modal from '../modal/modal';

import { TypeModal } from '../../const';
import { setGuitarsStorage } from '../../utils';

function ModalCardAdd() {
  const dispatch = useDispatch();

  const typeModal = useSelector(getModalType);
  const guitar = useSelector(getGuitarAdd);
  const guitarsIdAdd = useSelector(getGuitarIdAndCount);

  const guitarId = guitar.id;

  const addIdAndCount = () => {
    const myObj = Object();
    if (guitarsIdAdd !== undefined) {
      if (Object.keys(guitarsIdAdd).map(parseFloat).every((elem) => elem !== guitarId)) {
        myObj[guitarId] = 1;
        const returnedTarget = {...myObj, ...guitarsIdAdd};
        return returnedTarget;
      } else {
        const keyt = Object.keys(guitarsIdAdd).find((keyg) => guitarsIdAdd[keyg] === guitarsIdAdd[guitar.id]);
        myObj[keyt] = guitarsIdAdd[guitar.id] + 1;
        const returnedTarget = {...guitarsIdAdd, ...myObj};
        return returnedTarget;
      }
    }
  };

  const handleAddClick = (evt) => {
    evt.preventDefault();
    dispatch(setGuitarIdAndCount(addIdAndCount()));
    setGuitarsStorage(addIdAndCount());
    dispatch(setModalType(TypeModal.OpenAddGood));
  };

  return (
    typeModal === TypeModal.OpenCartAdd &&
    <Modal
      titleAdd={'Добавить товар в корзину'}
      addButtonMessage={'Добавить в корзину'}
      handleAddClick={handleAddClick}
    />
  );
}

export default ModalCardAdd;
