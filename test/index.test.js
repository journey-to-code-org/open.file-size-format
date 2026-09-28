import test from "node:test";
import assert from "node:assert/strict";
import { formatFileSize } from "../src/index.js";
test("formats bytes", () => assert.equal(formatFileSize(0), "0 B"));
test("formats binary units", () => assert.equal(formatFileSize(1536), "1.5 KiB"));
test("formats decimal units", () => assert.equal(formatFileSize(1500,{base:1000}), "1.5 kB"));
test("rejects negative values", () => assert.throws(() => formatFileSize(-1), RangeError));
