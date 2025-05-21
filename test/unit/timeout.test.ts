import {timeout} from "@adam-rocska/timeout";

describe(`timeout`, () => {
  it(`resolves after specified time`, async () => {
    const ms = 100;
    const start = Date.now();

    await timeout(ms);

    const elapsed = Date.now() - start;
    expect(elapsed).toBeGreaterThanOrEqual(ms);
  });
});