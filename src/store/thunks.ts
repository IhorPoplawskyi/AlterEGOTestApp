import { createAsyncThunk } from "@reduxjs/toolkit";

import ArticlesAPI from './../api/index'

import { INews } from "../types";
import { RootState } from "./store";

export const fetchNews = createAsyncThunk(
    'newsPageSlice/fettchNews',
    async(_args, thunkAPI): Promise<INews[]> => {
        const state = thunkAPI.getState() as RootState
        const { limit, offset } = state.newsPageSlice
        const news = await ArticlesAPI.getNews(limit, offset)
        return news
    }
)