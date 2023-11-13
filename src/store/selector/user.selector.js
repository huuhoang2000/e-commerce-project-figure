import { createSelector } from "@reduxjs/toolkit";

const userState = (state) => state.users;

export const getAllUsers = createSelector(userState, (users) => users.allUsers);
export const getUserDetails = createSelector(userState, (users) => users.userDetail);
export const getLoading = createSelector(userState, (users) => users.getLoading);
