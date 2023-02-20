export interface Credentials {
  admin: string
  password: string
}

export interface INews {
  id: number;
  featured: boolean;
  title: string;
  url: string;
  imageUrl: string;
  newsSite: string;
  summary: string;
  publishedAt: string;
}