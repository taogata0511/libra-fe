import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { Scanner } from "./Scanner";

const meta: Meta<typeof Scanner> = {
  component: Scanner,
  title: "Components/Scanner",
};

export default meta;
type Story = StoryObj<typeof Scanner>;

export const Default: Story = {
  args: {},
  render: function Comp({ ...args }) {
    const [code, setCode] = useState("");

    return (
      <div>
        <Scanner {...args} onCodeRead={(code) => setCode(code)} />

        <div>{code}</div>
      </div>
    );
  },
};
