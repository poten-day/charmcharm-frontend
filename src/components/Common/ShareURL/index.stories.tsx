import type { Meta, StoryObj } from '@storybook/react';
import ShareURL from './index';

const meta = {
  title: 'Common/ShareURL',
  component: ShareURL,
} satisfies Meta<typeof ShareURL>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    url: 'https://charmcharm.me/test-user-123456',
  },
};
