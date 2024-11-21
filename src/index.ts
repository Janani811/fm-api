import express, { Request, Response } from 'express';
import config from './config';
import swaggerUi from 'swagger-ui-express';

import './server';
import '.';

import setInitialRoutes from './routes/index';
import swaggerJSDoc from 'swagger-jsdoc';
import { swaggerSpec } from './swagger';

const app = express();
app.use(express.json());

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
