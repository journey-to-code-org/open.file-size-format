# open.file-size-format

Dependency-free byte-size formatting using decimal or binary units.

## Install

```bash
npm install @journey-to-code/open-file-size-format
```

## Usage

```js
formatFileSize(1536); // "1.5 KiB"
formatFileSize(1500, { base: 1000 }); // "1.5 kB"
```

## Runtime

- Node.js 18+
- modern ESM-capable tooling
- zero runtime dependencies

## Development

```bash
npm test
```

## Scope

This package intentionally focuses on one small, reusable responsibility.
Application-specific behavior belongs in higher-level packages.

## License

MIT
