const DECIMAL = ["B","kB","MB","GB","TB","PB"];
const BINARY = ["B","KiB","MiB","GiB","TiB","PiB"];

export function formatFileSize(bytes, options = {}) {
  if (typeof bytes !== "number" || !Number.isFinite(bytes) || bytes < 0) throw new RangeError("Expected bytes to be a non-negative finite number");
  if (options === null || typeof options !== "object" || Array.isArray(options)) throw new TypeError("Expected options to be an object");
  const { base = 1024, decimals = 1 } = options;
  if (![1000,1024].includes(base)) throw new RangeError("Expected base to be 1000 or 1024");
  if (!Number.isInteger(decimals) || decimals < 0 || decimals > 20) throw new RangeError("Expected decimals to be an integer from 0 to 20");
  const units = base === 1024 ? BINARY : DECIMAL;
  if (bytes === 0) return "0 B";
  const index = Math.min(Math.floor(Math.log(bytes) / Math.log(base)), units.length - 1);
  const value = bytes / (base ** index);
  return `${Number(value.toFixed(decimals))} ${units[index]}`;
}
