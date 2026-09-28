export interface FileSizeOptions { base?: 1000 | 1024; decimals?: number; }
export function formatFileSize(bytes: number, options?: FileSizeOptions): string;
