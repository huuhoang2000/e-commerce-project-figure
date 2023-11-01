import { createSelector } from "@reduxjs/toolkit";

const userState = (state) => state.users;

export const getAllUsers = createSelector(userState, (users) => users.allUsers);
// .filter(t => !t.isDeleted)
// export const getAllUsers = (state) => state.user.allUsers.filter(t => !t.isDeleted)
export const getUserDetails = createSelector(userState, (users) => users.userDetail);
// export const getUserDetails = (state) => state.user.userDetail;
export const getAllUsersFromBinSelector = createSelector(userState, (users) => users.allUsers.filter(users => users.isDeleted)) 
