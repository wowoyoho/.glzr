## Usage

```bash
$ npm install # or pnpm install or yarn install
```

### Learn more on the [Solid Website](https://solidjs.com) and come chat with us on our [Discord](https://discord.com/invite/solidjs)

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.

### `npm run build`

Builds the app for production to the `dist` folder.<br>
It bundles Solid in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

## Network empty-state override

If the Zebar network provider returns no interfaces/traffic, you can control the fallback icon with `.env`:

```env
VITE_NETWORK_EMPTY_STATE=connected
```

Supported values: `connected` (default), `wifi`, `disconnected`.

## Style debug toggle

To verify CSS selectors are being applied, enable:

```env
VITE_DEBUG_STYLES=1
```

This adds red outlines/background on left-side buttons and red glow shadows on right-side icons.
