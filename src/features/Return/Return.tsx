import clsx from "clsx";
import { Suspense } from "react";
import { toast } from "react-toastify";

import { Book } from "@/components/Book";
import { Button } from "@/components/Button";
import { Error } from "@/components/Error";
import { Spacer } from "@/components/Spacer";
import { DonateSkeleton } from "@/features/Donate/DonateSkeleton.tsx";
import { useRakutenBook } from "@/hooks/useRakutenBook.ts";
import { playLotteryReturnSound } from "@/utils/lottery";

interface Props {
  code: string;
}

export const Return = ({ code }: Props) => {
  const { data, isError } = useRakutenBook(code);

  if (isError) {
    return <Error />;
  }

  const handleClick = async () => {
    // 本を借りる処理
    const sound = playLotteryReturnSound();

    if (sound) {
      await sound.play();
    }

    toast.success("返却しました");
  };

  return (
    <Suspense fallback={<DonateSkeleton />}>
      <Book book={data} />

      <Spacer tag="div" />

      <Button className={clsx("w-full")} label="返却" onClick={handleClick} />
    </Suspense>
  );
};
