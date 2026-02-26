import style from "./NewsPage.module.scss";

import { FC, useCallback, useEffect, useState } from "react";

import { LoadMore, SearchBar, PageItem, ScrollToTop } from "../../components";

import { fetchNews } from "../../store/thunks";
import { useAppDispatch, useAppSelector } from "../../store/store";
import {
  setSearchTerm,
  setOffset,
  deleteArticle,
} from "../../store/newsPageSlice";

import {
  Container,
  Box,
  Alert,
  AlertTitle,
  CircularProgress,
} from "@mui/material";

export const NewsPage: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const [showTopBtn, setShowTopBtn] = useState<boolean>(false);

  const news = useAppSelector((state) => state.newsPageSlice.news);
  const offset = useAppSelector((state) => state.newsPageSlice.offset);
  const status = useAppSelector((state) => state.newsPageSlice.status);
  const searchTerm = useAppSelector((state) => state.newsPageSlice.searchTerm);
  const totalCount = useAppSelector((state) => state.newsPageSlice.count);

  const showLoadMoreBtn = totalCount === news.length;

  const onSearchHandler = useCallback(
    (value: string): void => {
      if (value && value === searchTerm) return;
      dispatch(setOffset(0));
      dispatch(setSearchTerm(value));
      dispatch(fetchNews());
    },
    [dispatch, searchTerm]
  );

  const loadMoreArticles = useCallback(() => {
    dispatch(setOffset(offset + 1));
    dispatch(fetchNews());
  }, [dispatch, offset]);

  const onDeleteArticle = (id: number) => {
    dispatch(deleteArticle(id));
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 700) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  return (
    <Container className={style.Wrapper}>
      <SearchBar onSearch={onSearchHandler} value={searchTerm} />
      <Box className={style.Container}>
        {news &&
          news.map((post) => (
            <PageItem
              key={post.id}
              onDeleteArticle={onDeleteArticle}
              post={post}
            />
          ))}
      </Box>

      {status === "loading" && <CircularProgress className={style.Preloader} />}
      {showTopBtn && <ScrollToTop />}

      {!showLoadMoreBtn && status === "success" && (
        <Box className={style.LoadMoreWrapper}>
          <LoadMore onClick={loadMoreArticles} />
        </Box>
      )}

      {status === "not found" && (
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
