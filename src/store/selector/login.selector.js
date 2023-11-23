import { createSelector } from "@reduxjs/toolkit";

const loginState = (state) => state.login;

export const getLoginToken = createSelector(loginState, (login) => login.token);
