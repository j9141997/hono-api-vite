import { serve } from '@hono/node-server';
import { Hono } from 'hono';

const app = new Hono();

app.get('/', (c) => {
  console.log('Hello Hono!');
  return c.json({ message: 'Hello Hono!' });
});

const port = 8080;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});

export default app;
