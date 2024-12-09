import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenu : true
  },
  reducers : {
    toggleMenu: (state)=>{
      state.isMenu = !state.isMenu;
    }
  }
})

export const {toggleMenu } = appSlice.actions
export default appSlice.reducer