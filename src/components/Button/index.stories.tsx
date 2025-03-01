import type { Meta, StoryObj } from '@storybook/react';
import { rest } from 'msw';
import Button from './index';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    msw: {
      handlers: [
        rest.get('/api/button-data', (req, res, ctx) => {
          return res(
            ctx.json({
              status: 'success',
              message: 'ボタンデータが正常に取得されました',
            })
          );
        }),
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: 'プライマリボタン',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    label: 'セカンダリボタン',
    variant: 'secondary',
  },
};

export const Disabled: Story = {
  args: {
    label: '無効ボタン',
    disabled: true,
  },
}; 