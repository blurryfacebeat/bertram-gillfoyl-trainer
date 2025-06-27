import { http } from 'msw';

export const handlers = [
  http.get('/api/user', () => {
    return new Response(JSON.stringify({ name: 'Test User' }), {
      headers: { 'Content-Type': 'application/json' },
      status: 200,
    });
  }),
];
