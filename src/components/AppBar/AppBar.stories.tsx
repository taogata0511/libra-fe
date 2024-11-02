import type { Meta, StoryObj } from "@storybook/react";

import { AppBar } from "./AppBar";

const meta: Meta<typeof AppBar> = {
  component: AppBar,
  title: "Components/AppBar",
};

export default meta;
type Story = StoryObj<typeof AppBar>;

export const Default: Story = {
  args: {},
};
