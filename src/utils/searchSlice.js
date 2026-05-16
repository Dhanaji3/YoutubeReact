import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchQuery: '',
  },
  reducers: {
    searchText: (state, action) => {
      state.searchQuery = action.payload;
    },
    clearSearch: (state) => {
      state.searchQuery = '';
    },
  },
});

export const { searchText, clearSearch } = searchSlice.actions;
export default searchSlice.reducer;
