# processlab-ui

UI package extracted from ProcessLab for reuse across apps.

## Install

Use a GitHub URL (recommended) or a local path while developing:

```bash
npm i processlab-ui
```

## Usage

### Tailwind app (ProcessLab)

Import the theme first and let your app Tailwind build the classes:

```css
@import "processlab-ui/theme.css";

@tailwind base;
@tailwind components;
@tailwind utilities;
```

Add the package dist folder to your Tailwind content:

```ts
content: [
  "./src/**/*.{ts,tsx}",
  "./node_modules/processlab-ui/dist/**/*.{js,ts,jsx,tsx}",
],
```

### Non-Tailwind app (GBank / Greport)

Import the compiled CSS:

```ts
import "processlab-ui/style.css";
```

### Component imports

```ts
import { AppShell, Topbar, Button } from "processlab-ui";
```

## Build

```bash
npm run build
```

Watch mode:

```bash
npm run build:watch
```

## Updates (tags)

Pin a tag in consuming apps:

```json
"processlab-ui": "git+https://github.com/WhiteShieldPT/processlab-ui.git#v0.1.1"
```
