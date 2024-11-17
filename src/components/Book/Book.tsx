import clsx from "clsx";

import { Image } from "@/components/Image";
import { Spacer } from "@/components/Spacer";
import { Book as IBook } from "@/interfaces/book.ts";

interface Props {
  book: IBook;
}

export const Book = ({ book }: Props) => {
  return (
    <div className={clsx("w-full")}>
      <p>{book.title}</p>

      <Spacer tag="div" />

      <Image
        className={clsx("w-full")}
        src={book.cover}
        alt={`${book.title}のカバー画像`}
      />
    </div>
  );
};
