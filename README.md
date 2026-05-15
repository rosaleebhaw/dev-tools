# dev-tools

`dev-tools` is a TypeScript library designed to enhance the development experience for gaming applications. By providing a suite of utilities and tools, it empowers developers to streamline their workflow and create engaging gaming experiences with ease.

## Features

- **Game State Management**: Simplify the management of game states, including transitions and events, to keep the gameplay fluid and responsive.
- **Input Handling**: Capture and manage player input efficiently, supporting a range of devices and configurations.
- **Asset Preloader**: Load game assets asynchronously to improve performance and ensure a smooth gameplay experience from the start.
- **Custom Event System**: Implement a robust event system to handle in-game events, enabling seamless communication between game components.

## Installation

To integrate `dev-tools` into your project, simply run:

```bash
npm install dev-tools
```

## Usage

Once installed, you can utilize the features in your TypeScript code as follows:

```typescript
import { GameManager } from 'dev-tools';

// Initialize game manager
const gameManager = new GameManager();

// Set up input handling
gameManager.setupInput();

// Preload assets
gameManager.preloadAssets(['asset1.png', 'asset2.mp3']);

// Start the game
gameManager.start();
```

Explore the documentation for further details on advanced configurations and customizations to best fit your game development needs. 

![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)

Feel free to contribute, report issues, or suggest features to enhance our toolkit! For more details, visit our [GitHub page](https://github.com/Rosaleebhaw/dev-tools).