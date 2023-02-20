import { createSlice } from "@reduxjs/toolkit";
import { INews } from "../types";
import { fetchNews } from "./thunks";

interface InitState {
  limit: number
  offset: number
  news: INews[] | null
}

const InitState: InitState = {
  limit: 12,
  offset: 0,
  news: null,
}

const newsPageSlice = createSlice({
  name: 'newsPageSlice',
  initialState: InitState,
  reducers: {

  },
  extraReducers:(builder) => {
    builder.addCase(fetchNews.fulfilled, (state, action) => {
      state.news = action.payload
    })
  }
})

export const {

} = newsPageSlice.actions

export default newsPageSlice.reducer;