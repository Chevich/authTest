import { Environment } from './environment-interface';
import { APITOKEN2 } from './key';

export const environment: Environment = {
  production: true,
  apiToken: `${APITOKEN2}`,
  basePath: 'https://api.themoviedb.org/4',
  redirectTo: 'http://localhost:4200',
  authUrl: 'https://www.themoviedb.org/auth/access',
};
