import Auth from './auth/index';

export default function routes(app) {
  app.use('/auth', Auth);
}
