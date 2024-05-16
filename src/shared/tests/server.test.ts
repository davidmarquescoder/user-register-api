// ANCHOR imports
import * as request from 'supertest';
import app from '../core/app';
import * as dotenv from 'dotenv';

// Dotenv Config
dotenv.config();

describe('Testing the server initialization file', () => {
  it('Must start the server and listen on the specified port', async () => {
    const server = app.listen(process.env.TEST_PORT);

    try {
      const response = await request(app).get('/health-check');
      expect(response.status).toBe(200);
    } finally {
      server.close();
    }
  });
});
