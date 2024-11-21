import Auth from './auth/index';

export default function routes(app) {
  // console.log(app);
  app.use('/auth', Auth);
}
