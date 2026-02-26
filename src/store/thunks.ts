import { createAsyncThunk } from "@reduxjs/toolkit";

import { getNews } from "./../api/index";

import { INewsResponse } from "../types";
import { RootState } from "./store";

export const fetchNews = createAsyncThunk(
  "newsPageSlice/fetchNews",
  async (_args, thunkAPI): Promise<INewsResponse> => {
    const state = thunkAPI.getState() as RootState;
    const { filter, searchTerm, limit, offset } = state.newsPageSlice;

    const news = await getNews(filter, searchTerm, limit, offset);

    return news;
  }
);
