import useSWRMutation from "swr/mutation";

import { poster } from "@/apis/poster.ts";

export const useBorrow = () => {
  const { trigger, isMutating } = useSWRMutation(
    `${import.meta.env.VITE_API_URL}/borrow`,
    poster,
  );

  return { trigger, isMutating };
};
