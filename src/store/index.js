import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './slices/user.slice';
import thunk from 'redux-thunk';
import { productReducer } from './slices/product.slice';

const store = configureStore({
  reducer: {
    users: userReducer,
    products: productReducer
  },
  middleware: [thunk]
});

export default store;
