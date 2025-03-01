import '@testing-library/jest-dom';
import { server } from '../mocks/server';
import { expect } from 'vitest';
import matchers from '@testing-library/jest-dom/matchers';

// @testing-library/jest-domのマッチャーをVitestに追加
expect.extend(matchers);

// MSWのサーバーを起動
beforeAll(() => server.listen());
// 各テスト後にハンドラーをリセット
afterEach(() => server.resetHandlers());
// テスト終了後にサーバーをクローズ
afterAll(() => server.close()); 