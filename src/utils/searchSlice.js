import { createSlice } from "@reduxjs/toolkit";
const searchSlice = createSlice({
  name: "search",
  initialState: {
    search: "",
  },
  reducers: {
    searchText: (state, payload) => {
      state.search = payload;
    },
  },
});
export const { searchText } = searchSlice.actions;
export default searchSlice.reducer;
