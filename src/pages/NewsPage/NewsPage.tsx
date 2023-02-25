import style from "./NewsPage.module.scss";

import { FC, useCallback } from "react";

import { fetchNews, fetchTotalCount } from "../../store/thunks";
import { useAppDispatch, useAppSelector } from "../../store/store";

import { Container, Box, Alert, AlertTitle } from "@mui/material";
import { NewsPageItem } from "../../components/NewsPageItem/NewsPageItem";
import { setSearchTerm, setOffset } from "../../store/newsPageSlice";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { LoadMore } from "../../components/LoadMore/LoadMore";

export const NewsPage: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const news = useAppSelector((state) => state.newsPageSlice.news);
  const offset = useAppSelector((state) => state.newsPageSlice.offset);
  const searchTerm = useAppSelector((state) => state.newsPageSlice.searchTerm);
  const totalCount = useAppSelector((state) => state.newsPageSlice.totalCount);

  const onSearchHandler = useCallback(
    (value: string): void => {
      if (value && value === searchTerm) return;
      dispatch(setSearchTerm(value));
      dispatch(fetchTotalCount());
      dispatch(fetchNews());
    },
    [dispatch, searchTerm]
  );

  const loadMoreArticles = () => {
    dispatch(setOffset(offset + 1));
    dispatch(fetchNews());
  };

  const showLoadMoreBtn = totalCount && totalCount === news.length;

  return (
    <Container className={style.Wrapper}>
      <SearchBar onSearch={onSearchHandler} value={searchTerm} />
      <Box className={style.Container}>
        {news && news.map((post) => <NewsPageItem key={post.id} {...post} />)}
      </Box>
      {!showLoadMoreBtn && news.length !== 0 && (
        <Box className={style.LoadMoreWrapper}>
          <LoadMore onClick={loadMoreArticles} />
        </Box>
      )}
      {totalCount !== null && news.length === 0 && (
        <Box className={style.LoadMoreWrapper}>
          <LoadMore onClick={loadMoreArticles} />
        </Box>
      )}
      {totalCount === 0 && news.length === 0 && (
        <Alert severity="info">
          <AlertTitle>Nothing found</AlertTitle>
          We can't find anything by this keyword{" "}
          <strong>
            check that the keywords are correct or try another keywords!
          </strong>
        </Alert>
      )}
    </Container>
  );
};
