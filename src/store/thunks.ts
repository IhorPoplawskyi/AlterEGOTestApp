import { createAsyncThunk } from "@reduxjs/toolkit";

import { getNews, getTotalCount } from "./../api/index";

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

export const fetchTotalCount = createAsyncThunk(
  "newsPageSlice/fetchTotalCount",
  async (_args, thunkAPI): Promise<number> => {
    const state = thunkAPI.getState() as RootState;
    const { filter, searchTerm } = state.newsPageSlice;

    const count = await getTotalCount(filter, searchTerm);

    return count;
  }
);
