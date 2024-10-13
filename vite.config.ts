import { defineConfig } from 'vite';
import devServer from '@hono/vite-dev-server';
import nodeAdapter from '@hono/vite-dev-server/node';
import build from '@hono/vite-build/node';

export default defineConfig({
  plugins: [
    devServer({
      adapter: nodeAdapter,
      entry: 'src/index.ts', // The file path of your application.
    }),
    build({
      entry: 'src/index.ts',
      minify: true,
    }),
  ],
});
