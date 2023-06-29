import type { Meta, StoryObj } from '@storybook/react';
import Guideline from './index';

const meta = {
  title: 'Common/Guideline',
  component: Guideline,
} satisfies Meta<typeof Guideline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
