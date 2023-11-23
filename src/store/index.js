import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './slices/user.slice';
import thunk from 'redux-thunk';
import { productReducer } from './slices/product.slice';
import { loginReducer } from './slices/login.slice';

const preloadedState = {
  login: {
    token: localStorage.getItem('token'),
    loading: 'idle',
  },
};

const store = configureStore({
  reducer: {
    users: userReducer,
    products: productReducer,
    login: loginReducer
  },
  preloadedState,
  middleware: [thunk]
});

export default store;
