import { createSlice } from "@reduxjs/toolkit";

interface InitState {

}

const InitState: InitState = {

}

const newsPageSlice = createSlice({
  name: 'newsPageSlice',
  initialState: InitState,
  reducers: {

  }
})

export const {

} = newsPageSlice.actions

export default newsPageSlice.reducer;