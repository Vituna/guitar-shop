import { setDiscountGuitar, setCouponPostStatus, setGuitarAddBasket } from '../action';

import { basket } from './basket';

import { mockGuitarsModalsArr } from '../../utils/test-mocks';

const state = {
  guitarAddBasket: [],
  discountGuitar: 0,
  couponStatus: null,
};

describe('Reducer: Basket', () => {

  it('should update setDiscountGuitar', () => {
    expect(basket(state, setDiscountGuitar(2)))
      .toEqual({
        guitarAddBasket: [],
        discountGuitar: 2,
        couponStatus: null,
      });
  });
  it('should update setCouponPostStatus', () => {
    expect(basket(state, setCouponPostStatus(true)))
      .toEqual({
        guitarAddBasket: [],
        discountGuitar: 0,
        couponStatus: true,
      });
  });
  it('should update setGuitarAddBasket', () => {
    expect(basket(state, setGuitarAddBasket(mockGuitarsModalsArr)))
      .toEqual({
        guitarAddBasket: mockGuitarsModalsArr,
        discountGuitar: 0,
        couponStatus: null,
      });
  });

});
