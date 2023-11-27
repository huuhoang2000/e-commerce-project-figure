import { createSelector } from "@reduxjs/toolkit";

const cartState = (state) => state.carts;

export const getAllCarts = createSelector(productState, (carts) => carts.allCarts);
export const getCartsDetails = createSelector(productState, (carts) => carts.cartDetail);
