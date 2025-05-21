export const timeout = (ms: number) => new Promise<void>(resolve => {
  const timeout = setTimeout(() => {
    clearTimeout(timeout);
    resolve();
  }, ms);
});