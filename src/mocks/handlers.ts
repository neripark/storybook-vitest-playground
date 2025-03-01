import { rest } from 'msw';

export const handlers = [
  rest.get('/api/data', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        message: 'モックAPIからのレスポンス',
        data: [1, 2, 3, 4, 5],
      })
    );
  }),
]; 