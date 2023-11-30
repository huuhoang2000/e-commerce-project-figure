import { createSelector } from "@reduxjs/toolkit";

const cartState = (state) => state.carts;

export const getAllCarts = createSelector(cartState, (carts) => carts.allCarts);
export const getCartByCartId = createSelector(cartState, (carts) => carts.cartDetail);
export const getLoading = createSelector(cartState, (carts) => carts.loading);

