import { useSelector } from 'react-redux';

import { getModalType } from '../../store/reviews/selectors';

import Modal from '../modal/modal';

import { TypeModal } from '../../const';

function ModalAddSuccess() {
  const typeModal = useSelector(getModalType);

  return (
    typeModal === TypeModal.OpenAddGood &&
    <Modal
      godMarketMessage={'Товар успешно добавлен в корзину'}
      goBasketMessage={'Перейти в корзину'}
      continueShoppBtnMessage={'Продолжить покупки'}
    />
  );
}

export default ModalAddSuccess;
