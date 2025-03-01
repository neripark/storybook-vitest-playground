import type { Meta, StoryObj } from '@storybook/react';
import { rest } from 'msw';
import Button from './index';
import { useState } from 'react';

// API通信を行う関数
export const fetchButtonData = async () => {
  const response = await fetch('/api/button-data');
  return response.json();
};

const ButtonWithAPI = (args: any) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      const result = await fetchButtonData();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Button {...args} onClick={handleClick} disabled={loading} />
      {data && (
        <div data-testid="api-result">
          <p>ステータス: {data.status}</p>
          <p>メッセージ: {data.message}</p>
        </div>
      )}
    </div>
  );
};

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

export const WithAPI: StoryObj<typeof ButtonWithAPI> = {
  render: ButtonWithAPI,
  args: {
    label: 'APIデータを取得',
    variant: 'primary',
  },
}; 