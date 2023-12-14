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
//perform a GET request
export const fetchUserById = createAsyncThunk('users/fetchUserById', async (id) => {
    const response = await axios.get(`https://fakestoreapi.com/users/${id}`);
    return response.data;
})  
//perform a POST request
export const updateUserById = createAsyncThunk('users/updateUserById', async ({id, userData}) => {
  const response = await axios.post(`https://fakestoreapi.com/users/${id}`, userData);
  return response.data;
})  
//perform a DELETE request
export const deleteUser = createAsyncThunk('users/deleteUser', async (id) => {
  const response = await axios.delete(`https://fakestoreapi.com/users/${id}`);
  return response.data;
}) 

const usersSlice = createSlice({
  name: "users",
  initialState: {
    allUsers: [], 
    userDetail: null,
    loading:'idle',
  },
  reducers: {
    editUser: (state, action) => {
      const {id, userFormDetail } = action.payload;
      const index = state.allUsers.findIndex(
        (user) => user.id === id && !user.isDeleted
      );
      if (index !== -1) {
        const updatedUser = {
          ...state.allUsers[index],
          username: userFormDetail.username,
          password: userFormDetail.password,
          email: userFormDetail.email,
          name: `${userFormDetail.name.firstname} ${userFormDetail.name.lastname}`,
          phone: userFormDetail.phone,
          address: `${userFormDetail.address.city}, ${userFormDetail.address.street}, ${userFormDetail.address.number}, ${userFormDetail.address.zipcode}`,
        };
        return {
          ...state,
          allUsers: [
            ...state.allUsers.slice(0, index),
            updatedUser,
            ...state.allUsers.slice(index + 1),
          ],
        };
      }
    },
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
      .addCase(createUser.pending, (state) => {
        state.loading = 'loading';
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = 'succeeded'
        state.allUsers.push(action.payload);
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = 'failed';
        state.allUsers = action.error.message;
      })
      .addCase(fetchUserById.pending, (state) => {
        state.loading = 'loading';
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.loading = 'suceeded';
        state.userDetail = action.payload;
      })
      .addCase(fetchUserById.rejected, (state, action) => {
        state.loading = 'failed';
        state.userDetail = action.error.message;
      })
      .addCase(updateUserById.pending, (state) => {
        state.loading = 'loading';
      })
      .addCase(updateUserById.fulfilled, (state, action) => {
        state.loading = 'succeeded';    
        state.userDetail = action.payload;   
      })
      .addCase(updateUserById.rejected, (state, action) => {
        state.loading = 'failed';
        state.userDetail = action.error.message;
      })
      .addCase(deleteUser.pending, (state) => {
        state.loading = 'loading';
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.allUsers = state.allUsers.filter(user => user.id !== action.payload.id);
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.error.message;
      })
  },
})
export const userReducer = usersSlice.reducer;
    
export const { editUser } = usersSlice.actions;


