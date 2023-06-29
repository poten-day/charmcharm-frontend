import type { Meta, StoryObj } from '@storybook/react';
import Timer from './index';

const meta = {
  title: 'Common/Timer',
  component: Timer,
  tags: ['autodocs'],
} satisfies Meta<typeof Timer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    time: 130000,
    size: 'large',
  },
};

export const Small: Story = {
  args: {
    time: 130000,
    size: 'small',
  },
};
