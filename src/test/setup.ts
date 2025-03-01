import '@testing-library/jest-dom';
import { server } from '../mocks/server';

// MSWのサーバーを起動
beforeAll(() => server.listen());
// 各テスト後にハンドラーをリセット
afterEach(() => server.resetHandlers());
// テスト終了後にサーバーをクローズ
afterAll(() => server.close()); 