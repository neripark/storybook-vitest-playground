import { rest } from 'msw';

export const handlers = [
  rest.get('http://localhost:9999/api/data', (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        message: 'モックAPIからのレスポンス',
        data: [1, 2, 3, 4, 5],
      })
    );
  }),
]; 