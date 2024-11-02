import useSWR from "swr";

import { fetcher } from "@/apis/fetcher.ts";
import { Book, RakutenBookResponse } from "@/interfaces/book.ts";

export const useBook = (code: string) => {
  const url = code.startsWith("491")
    ? `https://app.rakuten.co.jp/services/api/BooksMagazine/Search/20170404?applicationId=${import.meta.env.VITE_RAKUTEN_DEVELOPER_ID}&jan=${code}`
    : `https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404?applicationId=${import.meta.env.VITE_RAKUTEN_DEVELOPER_ID}&isbn=${code}`;

  const { data, error, isLoading } = useSWR(url, fetcher<RakutenBookResponse>);

  return {
    data: {
      title: data?.Items[0]?.Item?.title,
      cover: data?.Items[0]?.Item?.largeImageUrl,
      salesDate: data?.Items[0]?.Item?.salesDate,
    } as Book,
    isLoading,
    isError: error,
  };
};
