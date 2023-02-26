import style from "./NewsPage.module.scss";

import { FC, useCallback } from "react";

import { LoadMore, SearchBar, NewsPageItem } from "../../components";

import { fetchNews, fetchTotalCount } from "../../store/thunks";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { setSearchTerm, setOffset, deleteArticle } from "../../store/newsPageSlice";

import { Container, Box, Alert, AlertTitle, CircularProgress } from "@mui/material";


export const NewsPage: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const news = useAppSelector((state) => state.newsPageSlice.news);
  const offset = useAppSelector((state) => state.newsPageSlice.offset);
  const status = useAppSelector((state) => state.newsPageSlice.status);
  const searchTerm = useAppSelector((state) => state.newsPageSlice.searchTerm);
  const totalCount = useAppSelector((state) => state.newsPageSlice.totalCount);

  const onSearchHandler = useCallback(
    (value: string): void => {
      if (value && value === searchTerm) return;
      dispatch(setOffset(0));
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

  const onDeleteArticle = (id: number) => {
    dispatch(deleteArticle(id))
  }

  const showLoadMoreBtn = totalCount === news.length;

  return (
    <Container className={style.Wrapper}>
      <SearchBar onSearch={onSearchHandler} value={searchTerm} />
      <Box className={style.Container}>
        {news && news.map((post) => <NewsPageItem key={post.id} onDeleteArticle={onDeleteArticle} post={post} />)}
      </Box>

      {status === 'loading' && <CircularProgress className={style.Preloader}/>}

      {!showLoadMoreBtn && status === 'success' && (
        <Box className={style.LoadMoreWrapper}>
          <LoadMore onClick={loadMoreArticles} />
        </Box>
      )}
      {status === 'not found' && (
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
