import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Components/Button",
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["contained", "outlined", "text"],
    },
    color: {
      control: { type: "select" },
      options: ["primary", "text"],
    },
    icon: {
      control: { type: "boolean" },
    },
    disabled: {
      control: { type: "boolean" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    label: "Button",
    variant: "contained",
    color: "primary",
  },
};

export const WithIcon: Story = {
  args: {
    label: "Button with Icon",
    icon: faCoffee,
    variant: "contained",
    color: "primary",
  },
};

export const Outlined: Story = {
  args: {
    label: "Outlined Button",
    variant: "outlined",
    color: "primary",
  },
};

export const Text: Story = {
  args: {
    label: "Text Button",
    variant: "text",
    color: "text",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Button",
    variant: "contained",
    color: "primary",
    disabled: true,
  },
};
