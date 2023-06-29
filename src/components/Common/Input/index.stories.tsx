import type { Meta, StoryObj } from '@storybook/react';
import Input from './index';

const meta = {
  title: 'Common/Input',
  component: Input,
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 'tagname',
    maxLength: 5,
    placeholder: '이름을 입력해주세요',
  },
};
