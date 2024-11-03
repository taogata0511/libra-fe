import { Meta, StoryObj } from "@storybook/react";

import { Book as IBook } from "@/interfaces/book.ts";

import { Book } from "./Book";

const meta: Meta<typeof Book> = {
  title: "Components/Book",
  component: Book,
  argTypes: {
    book: {
      description: "表示する書籍のデータ",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Book>;

// モックデータ
const sampleBook: IBook = {
  title: "サンプル書籍",
  cover: "https://via.placeholder.com/150",
};

export const Default: Story = {
  args: {
    book: sampleBook,
  },
};
