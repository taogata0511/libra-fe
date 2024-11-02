import type { Meta, StoryObj } from '@storybook/react';

import { Spacer } from './Spacer';

const meta: Meta<typeof Spacer> = {
  component: Spacer,
};

export default meta;
type Story = StoryObj<typeof Spacer>;

export const Default: Story = {
  args: {
    tag: "span",
    size: "medium"
  },
  render: (props) => {
    return (
      <div>
        <span>Spa</span>
        <Spacer {...props} />
        <span>cer</span>
      </div>
    )
  },
};
