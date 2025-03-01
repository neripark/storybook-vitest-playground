import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './index.stories';

// Storybookのストーリーをテストで使用
const { Primary, Secondary, Disabled, WithAPI } = composeStories(stories);

describe('Button', () => {
  test('プライマリボタンが正しくレンダリングされる', () => {
    render(<Primary />);
    const button = screen.getByRole('button', { name: 'プライマリボタン' });
    expect(button).toBeInTheDocument();
  });

  test('セカンダリボタンが正しくレンダリングされる', () => {
    render(<Secondary />);
    const button = screen.getByRole('button', { name: 'セカンダリボタン' });
    expect(button).toBeInTheDocument();
  });

  test('無効ボタンが正しくレンダリングされる', () => {
    render(<Disabled />);
    const button = screen.getByRole('button', { name: '無効ボタン' });
    expect(button).toBeDisabled();
  });

  test('クリックイベントが発火する', () => {
    const onClickMock = vi.fn();
    render(<Primary onClick={onClickMock} />);
    const button = screen.getByRole('button', { name: 'プライマリボタン' });
    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  test('APIからデータを取得して表示する', async () => {
    render(<WithAPI />);
    const button = screen.getByRole('button', { name: 'APIデータを取得' });
    
    // ボタンをクリック
    fireEvent.click(button);
    
    // API結果が表示されるのを待つ
    await waitFor(() => screen.getByTestId('api-result'));
    expect(screen.getByText('モックAPIからのレスポンス')).toBeInTheDocument();
    expect(screen.getByText('1, 2, 3, 4, 5')).toBeInTheDocument();
  });
}); 