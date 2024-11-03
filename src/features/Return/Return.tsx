import { Suspense } from "react";

import { Error } from "@/components/Error";
import { Loading } from "@/components/Loading";
import { useBook } from "@/hooks/useBook.ts";

interface Props {
  code: string;
}

export const Return = ({ code }: Props) => {
  const { data, isError } = useBook(code);

  if (isError) {
    return <Error />;
  }

  return (
    <Suspense fallback={<Loading />}>
      <div>{data.title}</div>

      <img src={data.cover} alt={`${data.title}のカバー画像`} />

      <div>{data.salesDate}</div>

      <button>借りる</button>
    </Suspense>
  );
};
