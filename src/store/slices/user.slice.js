import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

//perform a  GET request
export const fetchUser = createAsyncThunk('users/fetchUser', async () => {
  const response = await axios.get('https://fakestoreapi.com/users');
  return response.data;
})

//perform a POST request
export const createUser = createAsyncThunk('users/createUser', async (post) => {
  const response = await axios.post('https://fakestoreapi.com/users', post);
  return response.data;
}) 

//error not explicitly define the type of the initial state.
const usersSlice = createSlice({
  name: "users",
  initialState: {
    allUsers: [], 
    loading:'idle',
    userDetail: null,
  },
  reducers: {
    updateRole: (state, action) => {
      const {id, targetInfo} = action.payload;
      const index = state.allUsers.findIndex(user => user.id === id);
      state.allUsers[index].role = targetInfo;
    },
    softDeleteUser:  (state, action) => {
      const {id, value} = action.payload;
      const index = state.allUsers.findIndex(user => user.id === id)
      state.allUsers[index].isDeleted = value;
      localStorageUtil.refreshUsers(state);
    },
    hardDeleteUser: (state, action) => {
      const id = action.payload;
      state.allUsers = state.allUsers.filter(user => user.id !== id);
      localStorageUtil.refreshUsers(state);
    },
    updateInfo: (state, action) => {
      const {id, adminFormDetail } = action.payload;

      const index = state.allUsers.findIndex(
        (user) => user.id === id && !user.isDeleted
      );

      state.allUsers[index] = {
        ...state.allUsers[index],
        id: adminFormDetail.id,
        username: adminFormDetail.username,
        password: adminFormDetail.password,
        email: adminFormDetail.email,
        name: `${adminFormDetail.firstname} ${adminFormDetail.lastname}`,
        phone: adminFormDetail.phone,
        address: `${address.city}, ${address.street}, ${address.number}, ${address.zipcode}`,
      }
    }, 
    setUserDetails: (state, action) => {
      const id = action.payload;
      const userDetail = state.allUsers.find((user) => {
        return user.id === id && !user.isDeleted;
      });
      state.userDetail = userDetail || null;
    }    
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = 'loading';
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.allUsers = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = 'failed';
        state.allUsers = action.error.message;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.allUsers.push(action.payload);
      })
  },
})

export const { 
  updateRole, softDeleteUser, hardDeleteUser, updateInfo, 
  setUserDetails} = usersSlice.actions;

export const userReducer = usersSlice.reducer;
