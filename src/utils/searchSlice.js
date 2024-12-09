import { createSlice } from "@reduxjs/toolkit";
const searchSlice = createSlice({
  name: "search",
  initialState :{
    search : ""
  },
  reducers: {
    searchText: (state, payload) =>{
      console.log("payload",payload);
      state.search = payload;
      console.log('wees',state.search)
    }
  }
})
export const {searchText} = searchSlice.actions
export default searchSlice.reducer