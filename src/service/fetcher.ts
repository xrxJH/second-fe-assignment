import { BASE_URL } from '@constants/endpoint';

export const fetcher = {
  get: async (endpoint: string) => {
    const delay = (duration: number) =>
      new Promise((resolve) => setTimeout(resolve, duration));

    // 1초 지연
    await delay(1000);

    const url = `${BASE_URL}${endpoint}`;
    const response = await fetch(url);
    return response.json();
  },
};
