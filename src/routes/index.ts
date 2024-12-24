import AuthRoutes from './auth/index';
import ErrorRoutes from './error/index';

export default function routes(app) {
  app.use('/auth', AuthRoutes);
  app.use('/error', ErrorRoutes);
}
