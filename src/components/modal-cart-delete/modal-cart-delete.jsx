import { useSelector, useDispatch } from 'react-redux';
import { getModalType } from '../../store/reviews/selectors';
import { setModalType, setGuitarIdAndCount } from '../../store/action';
import { getGuitarAdd } from '../../store/guitar/selectors';
import { getGuitarIdAndCount } from '../../store/basket/selectors';
import Modal from '../modal/modal';

import { TypeModal } from '../../const';
import { setGuitarsStorage } from '../../utils';

function ModalCartDelete() {
  const dispatch = useDispatch();

  const typeModal = useSelector(getModalType);
  const guitar = useSelector(getGuitarAdd);
  const guitarsIdAdd = useSelector(getGuitarIdAndCount);

  const handleDeleteCardClick = () => {
    const keyt = Object.keys(guitarsIdAdd).find((keyg) => guitarsIdAdd[keyg] === guitarsIdAdd[guitar.id]);
    const exceptSecond = Object.keys(guitarsIdAdd).reduce((acc, key) => {
      if (key !== keyt) {
        acc[key] = guitarsIdAdd[key];
      }
      return acc;
    }, {});
    dispatch(setGuitarIdAndCount(exceptSecond));
    setGuitarsStorage(exceptSecond);
    dispatch(setModalType(''));
    document.body.style.position = '';
  };

  return (
    typeModal === TypeModal.OpenDeleteGuitar &&
    <Modal
      titleDel={'Удалить этот товар?'}
      delBtnCardMessage={'Удалить товар'}
      continueShoppingBtnMessage={'Продолжить покупки'}
      handleDeleteCardClick={handleDeleteCardClick}
    />
  );
}

export default ModalCartDelete;
