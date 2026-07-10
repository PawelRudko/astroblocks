import { defineConfig } from 'astro/config';

// Standalone demo kit — static output, no external services.
export default defineConfig({
  // Port comes from the PORT env (preview harness assigns a free one); falls back to 4322 for manual `npm run dev`.
  server: { host: true, port: Number(process.env.PORT) || 4322 },
});
