import { createReducer } from '@reduxjs/toolkit';
import { setDiscountGuitar, setCouponPostStatus, setGuitarIdAndCount, postCouponLoading } from '../action';

const initialState = {
  guitarIdAndCount: null,
  discountGuitar: 0,
  couponStatus: false,
  couponLoading: false,
};

const basket = createReducer(initialState, (builder) => {
  builder
    .addCase(setGuitarIdAndCount, (state, action) => {
      state.guitarIdAndCount = action.payload.guitarIdAndCount;
    })
    .addCase(setDiscountGuitar, (state, action) => {
      state.couponLoading = false;
      state.discountGuitar = action.payload.discountGuitar;
    })
    .addCase(setCouponPostStatus, (state, action) => {
      state.couponStatus = action.payload.couponStatus;
    })
    .addCase(postCouponLoading, (state) => {
      state.couponLoading = true;
    });

});

export {basket};
