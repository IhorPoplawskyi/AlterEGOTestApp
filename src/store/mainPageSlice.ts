import { createSlice } from "@reduxjs/toolkit";

interface InitState {

}

const InitState: InitState = {

}

const mainPageSlice = createSlice({
  name: 'mainPageSlice',
  initialState: InitState,
  reducers: {

  }
})

export const {

} = mainPageSlice.actions

export default mainPageSlice.reducer;