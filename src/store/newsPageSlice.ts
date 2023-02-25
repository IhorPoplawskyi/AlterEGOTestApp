import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INews } from "../types";
import { fetchNews, fetchTotalCount } from "./thunks";

interface InitState {
  limit: number;
  offset: number;
  news: INews[];
  filter: string;
  searchTerm: string;
  totalCount: number | null;
  status: "init" | "loading" | "success" | "error";
}

const InitState: InitState = {
  limit: 6,
  offset: 0,
  news: [],
  filter: "title_contains",
  searchTerm: "",
  totalCount: null,
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
      state.totalCount = state.totalCount! - 1;
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
      (state, action: PayloadAction<INews[]>) => {
        state.news = [...state.news, ...action.payload];
        state.status = "success";
      }
    );
    builder.addCase(
      fetchTotalCount.fulfilled,
      (state, action: PayloadAction<number>) => {
        state.totalCount = action.payload;
      }
    );
  },
});

export const { setSearchTerm, setOffset, deleteArticle } =
  newsPageSlice.actions;

export default newsPageSlice.reducer;
