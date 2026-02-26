import queryString from "query-string";

import { INewsResponse } from "../types";

const articlesEndpoint = "https://api.spaceflightnewsapi.net/v4/articles";

export const getNews = async (
  filter: string,
  searchTerm: string,
  limit: number,
  offset: number
): Promise<INewsResponse> => {
  const query = queryString.stringify({
    [filter]: searchTerm.split(" "),
    limit: limit,
    offset: offset * limit,
  });

  const response = await fetch(`${articlesEndpoint}?${query}`);
  return response.json();
};

export const getTotalCount = async (
  filter: string,
  searchTerm: string
): Promise<number> => {
  const query = queryString.stringify({ [filter]: searchTerm.split(" ") });

  const response = await fetch(`${articlesEndpoint}/count?${query}`);
  return response.json();
};
