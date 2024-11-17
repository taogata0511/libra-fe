import useSWR from "swr";

import { fetcher } from "@/apis/fetcher.ts";
import { BookResponse } from "@/interfaces/book.ts";

export const useBook = (code: string) => {
  const url = `${import.meta.env.VITE_API_URL}/book/${code}`;

  const { data, error, isLoading } = useSWR(url, fetcher<BookResponse>, {
    suspense: true,
  });

  return {
    data,
    isLoading,
    isError: error,
  };
};
