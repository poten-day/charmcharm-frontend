import type { Meta, StoryObj } from '@storybook/react';

import Button from './index';

const meta = {
  title: 'Common/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Button',
    color: 'black',
    size: 'large',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Button',
    color: 'black',
    size: 'large',
    disabled: true,
  },
};

export const WhiteSmall: Story = {
  args: {
    label: 'Button',
    color: 'white',
    size: 'small',
  },
};

export const BlackSmall: Story = {
  args: {
    label: 'Button',
    color: 'black',
    size: 'small',
  },
};
