import { api } from './client';

export const createInspection = (keyword: string) =>
  api.post('/crawl', { keyword });

export const fetcher = (url: string) => api.get(url).then(result => result.data);
