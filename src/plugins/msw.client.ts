export default defineNuxtPlugin(async () => {
  if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
    const { worker } = await import('@/mocks/browser');

    await worker.start({
      serviceWorker: {
        url: '/mockServiceWorker.js',
      },
      onUnhandledRequest: 'bypass',
    });
  }
});
