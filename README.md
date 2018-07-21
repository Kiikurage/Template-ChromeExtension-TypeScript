# Template-ChromeExtension-TypeScript


## Tools / Architectures

- Chrome extension template
	- content script
	- popup page
	- background page
	- option page
- TypeScript (v3.0.0)
- Webpack (v4.3.0)
- PostCSS
    - Sass
- CSS module available
- React


## Usage

1. Install packages

	```bash
	npm install
	```

2. Build extension

	```bash
	# Instead of `build`, you can run `build-watch` for watch mode
	npm run build 
	```

3. Load built package as `unpacked extension` on chrome.
