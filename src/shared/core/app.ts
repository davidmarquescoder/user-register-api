// Modules Imports
import * as express from 'express';
import * as dontenv from 'dotenv';
import * as cors from 'cors';

// Dotenv Config
dontenv.config();

// Imports Routes
import router from '../../modules/users/infra/routes/routes';


class App{

	public server: express.Application;

	constructor(){
		this.server = express();
		this.middlewares();
		this.routes();
	}

	middlewares(){
		this.server.use(express.json({limit: '50mb'}));
		this.server.use(express.urlencoded({extended: true, limit: '50mb'}));
		this.server.use(cors({credentials: true, origin: process.env.ORIGIN_URL}));
	}

	routes(){
		this.server.use('/api/v1/users', router);
	}
}

const app = new App().server;
export default app;