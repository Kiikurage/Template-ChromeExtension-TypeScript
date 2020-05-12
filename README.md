# Template-ChromeExtension-TypeScript

## Tools / Architectures

- Chrome extension template
    - content script
    - background page
- TypeScript
- Webpack
- eslint
    - typescript-eslint
- jest


## Usage

1. Install packages

    ```bash
    npm install
    ```

2. Build extension

    ```bash
    # Instead of `build`, you can run `build:watch` for watch mode
    npm run build 
    ```

3. Load built package as `unpacked extension` on chrome.
