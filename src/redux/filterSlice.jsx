import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter(state, action) {
      return action.payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;

export const { setFilter } = filterSlice.actions;

export const selectFilter = state => state.filter;
