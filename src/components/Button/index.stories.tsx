import type { Meta, StoryObj } from '@storybook/react';
import Button from './index';
import { useState } from 'react';
import { handlers } from '../../mocks/handlers';

// API通信を行う関数
const fetchButtonData = async () => {
  const response = await fetch('http://localhost:9999/api/data');
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
      <Result data={data} loading={loading} />
    </div>
  );
};

const Result = ({ data, loading }: { data: any, loading: boolean }) => {
  if (loading) {
    return <p>データを取得中...</p>;
  }
  if (!data) {
    return <p>データなし</p>;
  }

  return (
    <div data-testid="api-result">
      <p>メッセージ: {data.message}</p>
      <p>データ: {data.data.join(', ')}</p>
    </div>
  )
};

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    msw: {
      handlers: handlers,
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