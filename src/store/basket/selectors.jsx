import { NameSpace } from '../root-reducer';

export const getDiscountGuitar = (state) => state[NameSpace.Basket].discountGuitar;
export const getCouponStatus = (state) => state[NameSpace.Basket].couponStatus;
