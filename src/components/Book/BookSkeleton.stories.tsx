import { Meta, StoryObj } from "@storybook/react";

import { BookSkeleton } from "./BookSkeleton";

const meta: Meta<typeof BookSkeleton> = {
  title: "Components/BookSkeleton",
  component: BookSkeleton,
  parameters: {
    layout: "centered", // 中央配置にして見やすくする
  },
};

export default meta;
type Story = StoryObj<typeof BookSkeleton>;

export const Default: Story = {};
