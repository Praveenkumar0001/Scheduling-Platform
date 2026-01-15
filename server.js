const express = require('express');
const next = require('next');
const cors = require('cors');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const PORT = process.env.PORT || 3000;

app.prepare().then(() => {
  const server = express();

  // Middleware
  server.use(cors());
  server.use(express.json());
  server.use(express.urlencoded({ extended: true }));

  // API Routes will still be handled by Next.js API routes
  // but they're now served through Express.js
  
  // Health check endpoint
  server.get('/api/health', (req, res) => {
    res.json({ status: 'ok', backend: 'Express.js with Node.js', timestamp: new Date().toISOString() });
  });

  // Handle all other routes with Next.js
  server.use((req, res) => {
    return handle(req, res);
  });

  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`> Backend: Express.js with Node.js running`);
    console.log(`> Frontend: Next.js (React.js) running`);
    console.log(`> Database: PostgreSQL`);
    console.log(`> Server ready on http://localhost:${PORT}`);
  });
});
