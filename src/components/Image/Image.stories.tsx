import { Meta, StoryObj } from "@storybook/react";

import { Image } from "./Image";

const meta: Meta<typeof Image> = {
  title: "Components/Image",
  component: Image,
  argTypes: {
    src: {
      control: "text",
      description: "画像のURL",
    },
    alt: {
      control: "text",
      description: "画像の代替テキスト",
    },
    width: {
      control: "text",
      description: "画像の幅",
    },
    height: {
      control: "text",
      description: "画像の高さ",
    },
  },
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Image>;

export const Default: Story = {
  args: {
    src: "https://via.placeholder.com/150",
    alt: "プレースホルダー画像",
    width: "150px",
    height: "150px",
  },
};
