import express, { Request, Response } from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import bodyParser from 'body-parser';

import './server';
import '.';
import config from './config';
import setInitialRoutes from './routes/index';
import { swaggerSpec } from './swagger';

const app = express();

app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }));

// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));

// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }));

app.use(cookieParser());
app.use(logger('dev'));
app.use(cors({ credentials: true, origin: config.front_end_url }));
setInitialRoutes(app);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, { explorer: true }));
// app.use(setInitialRoutes);
app.get('/', (req: Request, res: Response) => {
  res.send('Hello from setup file');
});

app.listen(config.port, () => {
  console.log(`App listening on port ${config.port}`);
});

export default app;
