export interface ICredentials {
  username: string;
  password: string;
}

export interface INavItems {
  name: string;
  path: string;
}

export interface INews {
  id: number;
  featured: boolean;
  title: string;
  url: string;
  image_url: string;
  newsSite: string;
  summary: string;
  published_at: string;
}

export interface INewsResponse {
  results: INews[];
  count: number;
}