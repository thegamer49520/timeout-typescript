import {timeout} from "@adam-rocska/timeout";

test(`'timeout' should resolve after the given amount of ms.`, async () => {
  const now = Date.now();
  await timeout(200);
  expect(Date.now() - now).toBeGreaterThanOrEqual(200);
});