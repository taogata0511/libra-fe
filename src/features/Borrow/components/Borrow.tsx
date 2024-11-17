import clsx from "clsx";
import { Suspense, useState } from "react";
import { toast } from "react-toastify";

import { Book } from "@/components/Book";
import { Button } from "@/components/Button";
import { DatePicker } from "@/components/DatePicker";
import { Spacer } from "@/components/Spacer";
import { BorrowSkeleton } from "@/features/Borrow/components/BorrowSkeleton.tsx";
import { useBorrow } from "@/features/Borrow/hooks/useBorrow.ts";
import { BorrowRequest } from "@/features/Borrow/interfaces/borrow.ts";
import { useBook } from "@/hooks/useBook.ts";

interface Props {
  code: string;
}

export const Borrow = ({ code }: Props) => {
  const { data } = useBook(code);

  const { trigger, isMutating } = useBorrow();

  const [date, setDate] = useState(() => {
    const today = new Date();
    // デフォルトは2週間後
    today.setDate(today.getDate() + 14);
    return today;
  });

  const handleDateChange = (date: Date | null) => {
    setDate(date || new Date());
  };

  const handleClick = async () => {
    try {
      await trigger<BorrowRequest>({
        borrowUserId: 1,
        bookId: data.id,
        checkoutDate: new Date(),
        expectedReturnDate: date,
      });
      toast.success("借りました");
    } catch (error) {
      toast.success("借りるのに失敗しました");
      console.error(error);
    }
  };

  return (
    <Suspense fallback={<BorrowSkeleton />}>
      <Book book={data} />

      <Spacer tag="div" />

      <p>返却予定日</p>
      <DatePicker date={date} onChange={handleDateChange} />

      <Spacer tag="div" />

      <Button
        className={clsx("w-full")}
        label="借りる"
        disabled={isMutating}
        onClick={handleClick}
      />
    </Suspense>
  );
};
