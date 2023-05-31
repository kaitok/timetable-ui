import type { Meta, StoryObj } from '@storybook/react';

import Box from './Box';

const meta: Meta<typeof Box> = {
  title: 'Box',
  component: Box,
};

export default meta;
type Story = StoryObj<typeof Box>;

export const Primary: Story = {
  args: {
    title: 'title',
    width: '90px',
    borderRadius: '4px',
  },
};
