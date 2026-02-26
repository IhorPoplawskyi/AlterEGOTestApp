import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INews, INewsResponse } from "../types";
import { fetchNews } from "./thunks";

interface IInitState {
  limit: number;
  offset: number;
  count: number | null;
  news: INews[];
  filter: string;
  searchTerm: string;
  status: "init" | "loading" | "success" | "error" | "not found";
}

const InitState: IInitState = {
  limit: 6,
  offset: 0,
  count: null,
  news: [],
  filter: "title_contains",
  searchTerm: "",
  status: "init",
};

const newsPageSlice = createSlice({
  name: "newsPageSlice",
  initialState: InitState,
  reducers: {
    setSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
      state.news = [];
    },
    setOffset(state, action: PayloadAction<number>) {
      state.offset = action.payload;
    },
    deleteArticle(state, action: PayloadAction<number>) {
      state.news = state.news.filter(
        (article) => article.id !== action.payload
      );
      state.count = state.count! - 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNews.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchNews.rejected, (state) => {
      state.status = "error";
    });
    builder.addCase(
      fetchNews.fulfilled,
      (state, action: PayloadAction<INewsResponse>) => {
        if (action.payload.results.length === 0) {
          state.status = "not found";
          state.news = [];
        } else {
          state.news = [...state.news, ...action.payload.results];
          state.count = action.payload.count;
          state.status = "success";
        }
      }
    );
  },
});

export const { setSearchTerm, setOffset, deleteArticle } =
  newsPageSlice.actions;

export default newsPageSlice.reducer;
