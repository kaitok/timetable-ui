import type { Meta, StoryObj } from '@storybook/react';

import Box from './Box';

const meta: Meta<typeof Box> = {
  title: 'Box',
  component: Box,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Box>;

export const Primary: Story = {
  args: {
    text: 'test',
  },
};