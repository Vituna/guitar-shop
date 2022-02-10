import { setDiscountGuitar, setCouponPostStatus, setGuitarIdAndCount } from '../action';

import { basket } from './basket';

const state = {
  guitarIdAndCount: {},
  discountGuitar: 0,
  couponStatus: null,
  couponLoading: false,
};

describe('Reducer: Basket', () => {

  it('should update setDiscountGuitar', () => {
    expect(basket(state, setDiscountGuitar(2)))
      .toEqual({
        guitarIdAndCount: {},
        discountGuitar: 2,
        couponStatus: null,
        couponLoading: false,
      });
  });
  it('should update setCouponPostStatus', () => {
    expect(basket(state, setCouponPostStatus(true)))
      .toEqual({
        guitarIdAndCount: {},
        discountGuitar: 0,
        couponStatus: true,
        couponLoading: false,
      });
  });
  it('should update setGuitarIdAndCount', () => {
    expect(basket(state, setGuitarIdAndCount({2:1})))
      .toEqual({
        guitarIdAndCount: {2:1},
        discountGuitar: 0,
        couponStatus: null,
        couponLoading: false,
      });
  });

});
