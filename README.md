# @adam-rocska/timeout

A lightweight TypeScript/JavaScript utility that creates a Promise resolving after a specified number of milliseconds. Ideal for introducing delays in asynchronous workflows.

## Features

- **Simple Delay**: Creates a Promise that resolves after a specified time (in milliseconds).
- **TypeScript Support**: Fully typed for a better developer experience.
- **Lightweight**: Zero runtime dependencies and minimal footprint.
- **Browser and Node.js Support**: Compatible with modern browsers (last 3 years) and Node.js (v14+).
- **Well-Tested**: Includes unit tests to ensure reliable resolution after the specified delay.

## Installation

Install the package via npm or pnpm:

```bash
npm install @adam-rocska/timeout
```

or

```bash
pnpm add @adam-rocska/timeout
```

## Usage

The `timeout` function takes a number of milliseconds and returns a `Promise<void>` that resolves after the specified delay.

### Example: Basic Usage

```javascript
import { timeout } from '@adam-rocska/timeout';

async function main() {
  console.log('Starting...');
  await timeout(2000); // Wait for 2 seconds
  console.log('2 seconds later!');
}

main();
```

### Parameters

| Parameter | Type     | Description                                      | Default |
| --------- | -------- | ------------------------------------------------ | ------- |
| `ms`      | `number` | Time to wait (in milliseconds) before resolving. | -       |

### Returns

- **Resolves**: `Promise<void>` - Resolves after the specified delay.

## Types

The library includes TypeScript definitions for type safety.

```typescript
export declare const timeout: (ms: number) => Promise<void>;
```

## API

### `timeout(ms: number): Promise<void>`

Creates a Promise that resolves after the specified number of milliseconds.

## Requirements

- **Node.js**: Version 14 or higher (due to async/await and modern JavaScript features).
- **Browsers**: Supports browsers from the last 3 years (aligned with `browserslist`).
- **TypeScript**: Optional, for type safety (version 5.8 or higher recommended).

## Development

To contribute or test the library locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/adam-rocska/timeout-typescript.git
   ```
2. Install dependencies using pnpm:
   ```bash
   pnpm install
   ```
3. Run tests:
   ```bash
   pnpm test
   ```
4. Build the library:
   ```bash
   pnpm build
   ```
5. Check code quality and types:
   ```bash
   pnpm check
   ```

The library uses Jest for testing, ESLint for linting, and `bunchee` for building ES and CommonJS modules.

## Testing

The library includes unit tests covering:
- Resolution of the Promise after the specified delay.

Run `pnpm test` to execute the test suite.

## License

This project is licensed under the [MIT License](LICENSE).

## Contributing

Contributions are welcome! Please open an issue or submit a pull request on the [GitHub repository](https://github.com/adam-rocska/timeout-typescript).

## Support

If you encounter issues or have questions, please file an issue on the [GitHub Issues page](https://github.com/adam-rocska/timeout-typescript/issues).

## Funding

Support the development of this project via [GitHub Sponsors](https://github.com/sponsors/adam-rocska).

## Author

Created by [Ádám László Rocska](https://adam-rocska.github.io).