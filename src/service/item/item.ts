import { END_POINT } from '@constants/endpoint';
import { fetcher } from '@service/fetcher';

export const getItems = async (): Promise<Item[]> => {
  const response = await fetcher(END_POINT.items);

  return response.json();
};
