// ANCHOR imports
import { Request, Response } from 'express';
import * as express from 'express';
import * as dontenv from 'dotenv';
import * as cors from 'cors';

// Dotenv Config
dontenv.config();

// Routes
import router from '@/modules/users/interface-adapters/routes/routes';

class App {
  public server: express.Application;

  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json({ limit: '50mb' }));
    this.server.use(express.urlencoded({ extended: true, limit: '50mb' }));
    this.server.use(
      cors({ credentials: true, origin: process.env.ORIGIN_URL }),
    );
  }

  routes() {
    this.server.get('/health-check', (request: Request, response: Response) => {
      response.status(200).json({ Ok: true });
    });

    this.server.use('/api/v1/users', router);
  }
}

const app = new App().server;
export default app;
