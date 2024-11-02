import { Meta, StoryObj } from "@storybook/react";

import { Spacer } from "./Spacer";

const meta: Meta<typeof Spacer> = {
  component: Spacer,
  title: "Components/Spacer",
  argTypes: {
    tag: {
      control: { type: "select" },
      options: ["span", "div"],
    },
    size: {
      control: { type: "select" },
      options: ["xsmall", "small", "medium", "large"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Spacer>;

export const Default: Story = {
  args: {
    tag: "span",
    size: "medium",
  },
  render: (props) => (
    <div>
      <span>Spa</span>
      <Spacer {...props} />
      <span>cer</span>
    </div>
  ),
};

export const XSmall: Story = {
  args: {
    tag: "span",
    size: "xsmall",
  },
  render: (props) => (
    <div>
      <span>Spa</span>
      <Spacer {...props} />
      <span>cer</span>
    </div>
  ),
};

export const Small: Story = {
  args: {
    tag: "span",
    size: "small",
  },
  render: (props) => (
    <div>
      <span>Spa</span>
      <Spacer {...props} />
      <span>cer</span>
    </div>
  ),
};

export const Large: Story = {
  args: {
    tag: "span",
    size: "large",
  },
  render: (props) => (
    <div>
      <span>Spa</span>
      <Spacer {...props} />
      <span>cer</span>
    </div>
  ),
};

export const VerticalSpacer: Story = {
  args: {
    tag: "div",
    size: "medium",
  },
  render: (props) => (
    <div>
      <div>Spa</div>
      <Spacer {...props} />
      <div>cer</div>
    </div>
  ),
};
