import clsx from "clsx";
import { Suspense } from "react";
import { toast } from "react-toastify";

import { Book } from "@/components/Book";
import { Button } from "@/components/Button";
import { Error } from "@/components/Error";
import { Spacer } from "@/components/Spacer";
import { DonateSkeleton } from "@/features/Donate/DonateSkeleton.tsx";
import { useBook } from "@/hooks/useBook.ts";
import { playLotteryDonateSound } from "@/utils/lottery";

interface Props {
  code: string;
}

export const Donate = ({ code }: Props) => {
  const { data, isError } = useBook(code);

  if (isError) {
    return <Error />;
  }

  const handleClick = async () => {
    // 本を借りる処理
    const sound = playLotteryDonateSound();

    if (sound) {
      await sound.play();
    }

    toast.success("寄贈しました");
  };

  return (
    <Suspense fallback={<DonateSkeleton />}>
      <Book book={data} />

      <Spacer tag="div" />

      <Button className={clsx("w-full")} label="寄贈" onClick={handleClick} />
    </Suspense>
  );
};
