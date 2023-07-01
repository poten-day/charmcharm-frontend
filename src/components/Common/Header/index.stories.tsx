import type { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import Header from './index';

const meta = {
  title: 'Common/Header',
  component: Header,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: '/',
    },
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
