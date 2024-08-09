// tsup.config.ts
import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src/Calendar.tsx'],
    format: ['esm', 'cjs'],
    dts: true,
    minify: true,
    target: 'es5',
    sourcemap: true,
});
