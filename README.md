# timeout-typescript ⏳

![GitHub release](https://img.shields.io/github/release/thegamer49520/timeout-typescript.svg)
![GitHub stars](https://img.shields.io/github/stars/thegamer49520/timeout-typescript.svg)
![GitHub forks](https://img.shields.io/github/forks/thegamer49520/timeout-typescript.svg)

A lightweight TypeScript utility to create a Promise that resolves after a specified delay. Ideal for async delays in Node.js and browsers.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)
- [Support](#support)

## Features

- **Lightweight**: Minimal code footprint, easy to integrate.
- **TypeScript Support**: Built with TypeScript for better type safety.
- **Cross-Platform**: Works seamlessly in both Node.js and browser environments.
- **Promise-Based**: Utilizes Promises for clean asynchronous code.

## Installation

To install the utility, you can use npm or yarn. Run one of the following commands in your terminal:

```bash
npm install timeout-typescript
```

or 

```bash
yarn add timeout-typescript
```

## Usage

To use the utility, simply import it into your TypeScript or JavaScript file. Here’s a basic example:

```typescript
import { timeout } from 'timeout-typescript';

async function delayedExecution() {
    console.log('Waiting for 3 seconds...');
    await timeout(3000); // Wait for 3 seconds
    console.log('3 seconds have passed!');
}

delayedExecution();
```

## API Reference

### `timeout(ms: number): Promise<void>`

- **Parameters**:
  - `ms`: The delay in milliseconds before the Promise resolves.
  
- **Returns**: A Promise that resolves after the specified delay.

### Example

```typescript
timeout(1000).then(() => {
    console.log('Executed after 1 second');
});
```

## Examples

Here are some practical examples of how to use `timeout-typescript`.

### Example 1: Simple Delay

```typescript
import { timeout } from 'timeout-typescript';

async function simpleDelay() {
    console.log('Starting delay...');
    await timeout(2000); // 2 seconds
    console.log('Delay finished!');
}

simpleDelay();
```

### Example 2: Chaining Promises

```typescript
import { timeout } from 'timeout-typescript';

async function chainPromises() {
    console.log('First action');
    await timeout(1000);
    console.log('Second action after 1 second');
    await timeout(2000);
    console.log('Third action after another 2 seconds');
}

chainPromises();
```

### Example 3: Using in a Loop

```typescript
import { timeout } from 'timeout-typescript';

async function loopWithDelay() {
    for (let i = 1; i <= 5; i++) {
        console.log(`Iteration ${i}`);
        await timeout(1000); // 1 second delay
    }
}

loopWithDelay();
```

## Contributing

We welcome contributions! If you would like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a Pull Request.

Please ensure your code follows the existing style and includes appropriate tests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Support

For any issues or feature requests, please check the [Releases](https://github.com/thegamer49520/timeout-typescript/releases) section. You can also reach out via the Issues tab on GitHub.

## Releases

To download the latest version, visit the [Releases](https://github.com/thegamer49520/timeout-typescript/releases) page. Here, you can find the latest updates and changes.

## Acknowledgments

- Thanks to the TypeScript community for their contributions and support.
- Special thanks to all the contributors who have helped improve this project.

## Conclusion

`timeout-typescript` provides a simple yet effective way to manage delays in your asynchronous code. Whether you're building applications for Node.js or the browser, this utility can help streamline your workflows. Explore the examples, and feel free to contribute to make this tool even better!

---

This README provides a comprehensive overview of the `timeout-typescript` utility. For further details, feel free to explore the code and documentation.