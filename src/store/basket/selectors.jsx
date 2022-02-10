import { NameSpace } from '../root-reducer';

export const getDiscountGuitar = (state) => state[NameSpace.Basket].discountGuitar;
export const getCouponStatus = (state) => state[NameSpace.Basket].couponStatus;
export const getGuitarAddBasket = (state) => state[NameSpace.Basket].guitarAddBasket;
export const getGuitarIdAndCount = (state) => state[NameSpace.Basket].guitarIdAndCount;
export const getCouponLoading = (state) => state[NameSpace.Basket].couponLoading;
