import express, { Request, Response } from 'express';
import config from './config';

import './server';

import setInitialRoutes from './routes/index';

const app = express();
app.use(express.json());
setInitialRoutes(app);
app.get('/', (req: Request, res: Response) => {
  res.send('Hello from setup file');
});

app.listen(config.port, () => {
  console.log(`App listening on port ${config.port}`);
});

export default app;
