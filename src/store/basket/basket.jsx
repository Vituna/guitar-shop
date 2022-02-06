import { createReducer } from '@reduxjs/toolkit';
import { setDiscountGuitar, setCouponStatus, setGuitarAddBasket } from '../action';

const initialState = {
  guitarAddBasket: [],
  discountGuitar: 0,
  couponStatus: null,
};

const basket = createReducer(initialState, (builder) => {
  builder
    .addCase(setGuitarAddBasket, (state, action) => {
      state.guitarAddBasket = action.payload.guitarAddBasket;
    })

    .addCase(setDiscountGuitar, (state, action) => {
      state.discountGuitar = action.payload.discountGuitar;
    })
    .addCase(setCouponStatus, (state, action) => {
      state.couponStatus = action.payload.couponStatus;
    });
});

export {basket};
