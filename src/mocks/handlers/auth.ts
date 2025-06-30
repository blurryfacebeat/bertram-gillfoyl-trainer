import { http, HttpResponse } from 'msw';

export const authHandlers = [
  http.post('/api/auth/login', async ({ request }) => {
    const body = (await request.json()) as { email: string; password: string };

    if (body.email === 'test@example.com' && body.password === 'password') {
      return HttpResponse.json({
        token: 'mock-token-123',
        user: {
          id: '1',
          name: 'Bertram Gilfoyle',
          email: 'test@example.com',
        },
      });
    }

    return new HttpResponse('Invalid credentials', { status: 401 });
  }),

  http.get('/api/me', ({ request }) => {
    const auth = request.headers.get('Authorization');
    if (auth === 'Bearer mock-token-123') {
      return HttpResponse.json({
        id: '1',
        name: 'Bertram Gilfoyle',
        email: 'test@example.com',
      });
    }

    return new HttpResponse('Unauthorized', { status: 401 });
  }),
];
