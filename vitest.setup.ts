import '@testing-library/jest-dom';
import { server } from './src/mocks/server';

// Запускаем MSW в Node среде
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
