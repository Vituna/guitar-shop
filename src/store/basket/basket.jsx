import { createReducer } from '@reduxjs/toolkit';
import { setDiscountGuitar, setCouponStatus } from '../action';

const initialState = {
  discountGuitar: 0,
  couponStatus: null,
};

const basket = createReducer(initialState, (builder) => {
  builder
    .addCase(setDiscountGuitar, (state, action) => {
      state.discountGuitar = action.payload.discountGuitar;
    })
    .addCase(setCouponStatus, (state, action) => {
      state.couponStatus = action.payload.couponStatus;
    });
});

export {basket};
