import { render, screen, fireEvent } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './index.stories';

// Storybookのストーリーをテストで使用
const { Primary, Secondary, Disabled } = composeStories(stories);

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
}); 